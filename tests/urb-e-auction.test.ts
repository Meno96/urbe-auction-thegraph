import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
<<<<<<< HEAD
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
=======
import { Address, BigInt } from "@graphprotocol/graph-ts"
>>>>>>> bfefa070c85f355711cc577211bda25ce2a60478
import { AuctionEnded } from "../generated/schema"
import { AuctionEnded as AuctionEndedEvent } from "../generated/UrbEAuction/UrbEAuction"
import { handleAuctionEnded } from "../src/urb-e-auction"
import { createAuctionEndedEvent } from "./urb-e-auction-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let winner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let nftAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenId = BigInt.fromI32(234)
    let price = BigInt.fromI32(234)
<<<<<<< HEAD
    let auctionJson = Bytes.fromI32(1234567890)
=======
>>>>>>> bfefa070c85f355711cc577211bda25ce2a60478
    let newAuctionEndedEvent = createAuctionEndedEvent(
      winner,
      nftAddress,
      tokenId,
<<<<<<< HEAD
      price,
      auctionJson
=======
      price
>>>>>>> bfefa070c85f355711cc577211bda25ce2a60478
    )
    handleAuctionEnded(newAuctionEndedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AuctionEnded created and stored", () => {
    assert.entityCount("AuctionEnded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AuctionEnded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "winner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AuctionEnded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nftAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AuctionEnded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "AuctionEnded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )
<<<<<<< HEAD
    assert.fieldEquals(
      "AuctionEnded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "auctionJson",
      "1234567890"
    )
=======
>>>>>>> bfefa070c85f355711cc577211bda25ce2a60478

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
