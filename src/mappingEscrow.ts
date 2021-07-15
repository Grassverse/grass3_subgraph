import { BigInt } from "@graphprotocol/graph-ts"
import {
  grassEscrow,
  SaleComplete,
  AuctionCreated,
  AuctionBid,
  AuctionDurationExtended,
  AuctionEnded,
  AuctionCanceled,
  SaleCreated,
  SaleCanceled,
  OwnershipTransferred
} from "../generated/grassEscrow/grassEscrow"
import { Sale, NFTEntity, Auction, Bid } from "../generated/schema"

export function handleSaleCreated(event: SaleCreated): void {
    let time = event.block.timestamp
    let saleId = event.params.saleId.toHex()
    let sale = new Sale(saleId)

    sale.token = event.params.tokenId.toHex()
    sale.price = event.params.price
    sale.owner = event.params.tokenOwner
    sale.status = "OPEN"
    sale.saleCreatedAt = time
    sale.saleEndedAt = BigInt.fromString("0")
    sale.save()

    let nft = NFTEntity.load(event.params.tokenId.toHex())
    nft.sale = saleId
    nft.save()
}

export function handleSaleComplete(event: SaleComplete): void {
    let saleId = event.params.saleId.toHex()
    let time = event.block.timestamp
    let sale = Sale.load(saleId)
    sale.status = "SOLD"
    sale.saleEndedAt = time
    sale.buyer = event.params.buyer
    sale.txnHash = event.transaction.hash
    sale.save()

    let nft = NFTEntity.load(event.params.tokenId.toHex())
    nft.sale = null
    nft.save()
}

export function handleSaleCanceled(event: SaleCanceled): void {
    let saleId = event.params.saleId.toHex()
    let time = event.block.timestamp
    let sale = Sale.load(saleId)
    sale.status = "CANCELED"
    sale.saleEndedAt = time
    sale.txnHash = event.transaction.hash
    sale.save()

    let nft = NFTEntity.load(event.params.tokenId.toHex())
    nft.sale = null
    nft.save()
}

export function handleAuctionCreated(event: AuctionCreated): void {
    let auctionId = event.params.auctionId.toHex();
    let auction = new Auction(auctionId);

    auction.token = event.params.tokenId.toHex()
    auction.reservePrice = event.params.reservePrice
    auction.owner = event.params.tokenOwner
    auction.duration = event.params.duration
    auction.status = "OPEN"
    auction.auctionCreatedAt = event.block.timestamp
    auction.save()

    let nft = NFTEntity.load(event.params.tokenId.toHex())
    nft.auction = auctionId
    nft.save()
}

export function handleAuctionBid(event: AuctionBid): void {
    let bidId = event.params.tokenId.toHex() + '-' + event.params.bidder.toHex() + '-' + event.block.timestamp.toString()

    let bid = new Bid(bidId)
    bid.auction = event.params.auctionId.toHex()
    bid.bidder = event.params.bidder
    bid.bid = event.params.bid
    bid.status = "OPEN"
    bid.timestamp = event.block.timestamp
    bid.txnHash = event.transaction.hash
    bid.save()

    let auction = Auction.load(event.params.auctionId.toHex())
    
    if(event.params.firstBid)
    {
        auction.firstBidTime = bid.timestamp
        auction.status = "STARTED"
    }
    else
    {
        let lastBid = Bid.load(auction.lastBid)
        lastBid.status = "CANCELED"
        lastBid.save()
    }
    auction.lastBid = bidId
    auction.save()
}

export function handleAuctionDurationExtended(event: AuctionDurationExtended): void {
    let auction = Auction.load(event.params.auctionId.toHex())
    
    auction.duration = event.params.newDuration
    auction.save()
}

export function handleAuctionEnded(event: AuctionEnded): void {
    let auction = Auction.load(event.params.auctionId.toHex())

    auction.status = "SOLD"
    auction.auctionEndedAt = event.block.timestamp
    auction.txnHash = event.transaction.hash
    auction.save()

    let lastBid = Bid.load(auction.lastBid)
    lastBid.status = "ACCEPTED"
    lastBid.save()

    let nft = NFTEntity.load(event.params.tokenId.toHex())
    nft.auction = null
    nft.save()
}

export function handleAuctionCanceled(event: AuctionCanceled): void {
    let auction = Auction.load(event.params.auctionId.toHex())

    auction.status = "CANCELED"
    auction.auctionEndedAt = event.block.timestamp
    auction.txnHash = event.transaction.hash
    auction.save()

    let nft = NFTEntity.load(event.params.tokenId.toHex())
    nft.auction = null
    nft.save()
}
