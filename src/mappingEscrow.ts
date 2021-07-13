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
import { Sale } from "../generated/schema"

export function handleSaleCreated(event: SaleCreated): void {
    let time = event.block.timestamp
    let saleId = event.params.saleId.toHex()
    let sale = new Sale(saleId)

    sale.token = event.params.tokenId.toHex()
    sale.price = event.params.price
    sale.owner = event.params.tokenOwner
    sale.isComplete = false
    sale.saleCreatedAt = time
    sale.saleEndedAt = BigInt.fromString("0")
    sale.save()
}

export function handleSaleComplete(event: SaleComplete): void {
    let saleId = event.params.saleId.toHex()
    let time = event.block.timestamp
    let sale = Sale.load(saleId)
    sale.isComplete = true
    sale.saleEndedAt = time
    sale.buyer = event.params.buyer
    sale.save()
}

export function handleSaleCanceled(event: SaleCanceled): void {
    let saleId = event.params.saleId.toHex()
    let time = event.block.timestamp
    let sale = Sale.load(saleId)
    sale.isComplete = true
    sale.saleEndedAt = time
    sale.save()
}