import { BigInt } from "@graphprotocol/graph-ts"
import {
  grassNFT721,
  Approval,
  ApprovalForAll,
  NFTCreated,
  OwnershipTransferred,
  Transfer
} from "../generated/grassNFT721/grassNFT721"
import { NFTEntity, Transaction, Creator } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex())

  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (entity == null) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())

  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }

  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // // Entity fields can be set based on event parameters
  // entity.owner = event.params.owner
  // entity.approved = event.params.approved

  // // Entities can be written to the store with `.save()`
  // entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.mintNFT(...)
  // - contract.balanceOf(...)
  // - contract.getApproved(...)
  // - contract.getCurrentCount(...)
  // - contract.getNft(...)
  // - contract.isApprovedForAll(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleNFTCreated(event: NFTCreated): void {
  let id = event.params.tokenId.toHex();
  let creatorAddress = event.params.artist.toHexString()

  let nft =  new NFTEntity(id)
  
  nft.uri = event.params.uri;
  nft.creator = creatorAddress;
  nft.owner = event.params.artist;
  nft.name = event.params.name;
  nft.description = event.params.description;
  nft.save();

  let creator = Creator.load(creatorAddress)

  if(creator == null)
  {
    creator = new Creator(creatorAddress);
  } 
  creator.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {
  let id = event.params.tokenId.toHex()
  let nft = NFTEntity.load(id)
  nft.owner = event.params.to 
  nft.save()

  let time = event.block.timestamp
  let transactionId = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let transaction = new Transaction(transactionId)

  transaction.from = event.params.from
  transaction.to = event.params.to
  transaction.token = id
  transaction.timestamp = time
  transaction.save()
}
