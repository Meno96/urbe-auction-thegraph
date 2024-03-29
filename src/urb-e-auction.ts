import { BigInt, Address } from "@graphprotocol/graph-ts";
import {
  AuctionEnded as AuctionEndedEvent,
  HighestBidIncreased as HighestBidIncreasedEvent,
  ItemCanceled as ItemCanceledEvent,
  ItemListed as ItemListedEvent,
} from "../generated/UrbEAuction/UrbEAuction";
import {
  AuctionEnded,
  HighestBidIncreased,
  ItemCanceled,
  ItemListed,
  ActiveItem,
} from "../generated/schema";

export function handleItemListed(event: ItemListedEvent): void {
  let itemListed = ItemListed.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );

  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  if (!itemListed) {
    itemListed = new ItemListed(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
  }
  if (!activeItem) {
    activeItem = new ActiveItem(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
  }

  itemListed.nftAddress = event.params.nftAddress;
  activeItem.nftAddress = event.params.nftAddress;

  itemListed.tokenId = event.params.tokenId;
  activeItem.tokenId = event.params.tokenId;

  itemListed.price = event.params.price;
  activeItem.price = event.params.price;

  itemListed.endTime = event.params.endTime;
  activeItem.endTime = event.params.endTime;

  itemListed.startTime = event.params.startTime;
  activeItem.startTime = event.params.startTime;

  activeItem.buyer = Address.fromString(
    "0x0000000000000000000000000000000000000000"
  );
  activeItem.winner = Address.fromString(
    "0x0000000000000000000000000000000000000000"
  );

  itemListed.seller = event.params.seller;
  activeItem.seller = event.params.seller;

  itemListed.save();
  activeItem.save();
}

export function handleItemCanceled(event: ItemCanceledEvent): void {
  let itemCanceled = ItemCanceled.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  if (!itemCanceled) {
    itemCanceled = new ItemCanceled(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
  }
  itemCanceled.seller = event.params.seller;
  itemCanceled.nftAddress = event.params.nftAddress;
  itemCanceled.tokenId = event.params.tokenId;
  activeItem!.buyer = Address.fromString(
    "0x000000000000000000000000000000000000dEaD"
  );
  activeItem!.winner = Address.fromString(
    "0x000000000000000000000000000000000000dEaD"
  );

  itemCanceled.save();
  activeItem!.save();
}

export function handleAuctionEnded(event: AuctionEndedEvent): void {
  let auctionEnded = AuctionEnded.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  if (!auctionEnded) {
    auctionEnded = new AuctionEnded(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
  }
  auctionEnded.winner = event.params.winner;
  auctionEnded.nftAddress = event.params.nftAddress;
  auctionEnded.tokenId = event.params.tokenId;
  auctionEnded.seller = event.params.seller;
  auctionEnded.price = event.params.price;
  auctionEnded.auctionJson = event.params.auctionJson;

  activeItem!.winner = event.params.winner;

  auctionEnded.save();
  activeItem!.save();
}

export function handleHighestBidIncreased(
  event: HighestBidIncreasedEvent
): void {
  let highestBidIncreased = HighestBidIncreased.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  if (!highestBidIncreased) {
    highestBidIncreased = new HighestBidIncreased(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
  }
  if (!activeItem) {
    activeItem = new ActiveItem(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
  }

  highestBidIncreased.nftAddress = event.params.nftAddress;
  activeItem.nftAddress = event.params.nftAddress;

  highestBidIncreased.tokenId = event.params.tokenId;
  activeItem.tokenId = event.params.tokenId;

  highestBidIncreased.price = event.params.price;
  activeItem.price = event.params.price;

  highestBidIncreased.bidder = event.params.bidder;
  activeItem.buyer = event.params.bidder;

  highestBidIncreased.save();
  activeItem.save();
}

function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString();
}
