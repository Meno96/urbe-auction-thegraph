import { newMockEvent } from "matchstick-as"
<<<<<<< HEAD
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
=======
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
>>>>>>> bfefa070c85f355711cc577211bda25ce2a60478
import {
  AuctionEnded,
  HighestBidIncreased,
  ItemCanceled,
<<<<<<< HEAD
  ItemListed
=======
  ItemListed,
  OwnershipTransferred
>>>>>>> bfefa070c85f355711cc577211bda25ce2a60478
} from "../generated/UrbEAuction/UrbEAuction"

export function createAuctionEndedEvent(
  winner: Address,
  nftAddress: Address,
  tokenId: BigInt,
<<<<<<< HEAD
  price: BigInt,
  auctionJson: Bytes
=======
  price: BigInt
>>>>>>> bfefa070c85f355711cc577211bda25ce2a60478
): AuctionEnded {
  let auctionEndedEvent = changetype<AuctionEnded>(newMockEvent())

  auctionEndedEvent.parameters = new Array()

  auctionEndedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  auctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  auctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionEndedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
<<<<<<< HEAD
  auctionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionJson",
      ethereum.Value.fromBytes(auctionJson)
    )
  )
=======
>>>>>>> bfefa070c85f355711cc577211bda25ce2a60478

  return auctionEndedEvent
}

export function createHighestBidIncreasedEvent(
  bidder: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt
): HighestBidIncreased {
  let highestBidIncreasedEvent = changetype<HighestBidIncreased>(newMockEvent())

  highestBidIncreasedEvent.parameters = new Array()

  highestBidIncreasedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  highestBidIncreasedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  highestBidIncreasedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  highestBidIncreasedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return highestBidIncreasedEvent
}

export function createItemCanceledEvent(
<<<<<<< HEAD
  seller: Address,
=======
>>>>>>> bfefa070c85f355711cc577211bda25ce2a60478
  nftAddress: Address,
  tokenId: BigInt
): ItemCanceled {
  let itemCanceledEvent = changetype<ItemCanceled>(newMockEvent())

  itemCanceledEvent.parameters = new Array()

  itemCanceledEvent.parameters.push(
<<<<<<< HEAD
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  itemCanceledEvent.parameters.push(
=======
>>>>>>> bfefa070c85f355711cc577211bda25ce2a60478
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return itemCanceledEvent
}

export function createItemListedEvent(
<<<<<<< HEAD
  seller: Address,
=======
>>>>>>> bfefa070c85f355711cc577211bda25ce2a60478
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt,
  endTime: BigInt,
  startTime: BigInt
): ItemListed {
  let itemListedEvent = changetype<ItemListed>(newMockEvent())

  itemListedEvent.parameters = new Array()

  itemListedEvent.parameters.push(
<<<<<<< HEAD
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  itemListedEvent.parameters.push(
=======
>>>>>>> bfefa070c85f355711cc577211bda25ce2a60478
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  itemListedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )

  return itemListedEvent
}
<<<<<<< HEAD
=======

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
>>>>>>> bfefa070c85f355711cc577211bda25ce2a60478
