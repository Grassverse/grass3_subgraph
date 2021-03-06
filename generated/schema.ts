// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NFTEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NFTEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NFTEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NFTEntity", id.toString(), this);
  }

  static load(id: string): NFTEntity | null {
    return store.get("NFTEntity", id) as NFTEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get uri(): string {
    let value = this.get("uri");
    return value.toString();
  }

  set uri(value: string) {
    this.set("uri", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (value === null) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(value as string));
    }
  }

  get sale(): string | null {
    let value = this.get("sale");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set sale(value: string | null) {
    if (value === null) {
      this.unset("sale");
    } else {
      this.set("sale", Value.fromString(value as string));
    }
  }

  get auction(): string | null {
    let value = this.get("auction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set auction(value: string | null) {
    if (value === null) {
      this.unset("auction");
    } else {
      this.set("auction", Value.fromString(value as string));
    }
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Sale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Sale entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Sale entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Sale", id.toString(), this);
  }

  static load(id: string): Sale | null {
    return store.get("Sale", id) as Sale | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get buyer(): Bytes | null {
    let value = this.get("buyer");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set buyer(value: Bytes | null) {
    if (value === null) {
      this.unset("buyer");
    } else {
      this.set("buyer", Value.fromBytes(value as Bytes));
    }
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get saleCreatedAt(): BigInt {
    let value = this.get("saleCreatedAt");
    return value.toBigInt();
  }

  set saleCreatedAt(value: BigInt) {
    this.set("saleCreatedAt", Value.fromBigInt(value));
  }

  get saleEndedAt(): BigInt {
    let value = this.get("saleEndedAt");
    return value.toBigInt();
  }

  set saleEndedAt(value: BigInt) {
    this.set("saleEndedAt", Value.fromBigInt(value));
  }

  get txnHash(): Bytes | null {
    let value = this.get("txnHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set txnHash(value: Bytes | null) {
    if (value === null) {
      this.unset("txnHash");
    } else {
      this.set("txnHash", Value.fromBytes(value as Bytes));
    }
  }
}

export class Creator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Creator entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Creator entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Creator", id.toString(), this);
  }

  static load(id: string): Creator | null {
    return store.get("Creator", id) as Creator | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nfts(): Array<string> {
    let value = this.get("nfts");
    return value.toStringArray();
  }

  set nfts(value: Array<string>) {
    this.set("nfts", Value.fromStringArray(value));
  }
}

export class Auction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Auction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Auction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Auction", id.toString(), this);
  }

  static load(id: string): Auction | null {
    return store.get("Auction", id) as Auction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get reservePrice(): BigInt {
    let value = this.get("reservePrice");
    return value.toBigInt();
  }

  set reservePrice(value: BigInt) {
    this.set("reservePrice", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get bids(): Array<string> | null {
    let value = this.get("bids");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set bids(value: Array<string> | null) {
    if (value === null) {
      this.unset("bids");
    } else {
      this.set("bids", Value.fromStringArray(value as Array<string>));
    }
  }

  get firstBidTime(): BigInt | null {
    let value = this.get("firstBidTime");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set firstBidTime(value: BigInt | null) {
    if (value === null) {
      this.unset("firstBidTime");
    } else {
      this.set("firstBidTime", Value.fromBigInt(value as BigInt));
    }
  }

  get duration(): BigInt {
    let value = this.get("duration");
    return value.toBigInt();
  }

  set duration(value: BigInt) {
    this.set("duration", Value.fromBigInt(value));
  }

  get lastBid(): string | null {
    let value = this.get("lastBid");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set lastBid(value: string | null) {
    if (value === null) {
      this.unset("lastBid");
    } else {
      this.set("lastBid", Value.fromString(value as string));
    }
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get auctionCreatedAt(): BigInt {
    let value = this.get("auctionCreatedAt");
    return value.toBigInt();
  }

  set auctionCreatedAt(value: BigInt) {
    this.set("auctionCreatedAt", Value.fromBigInt(value));
  }

  get auctionEndedAt(): BigInt | null {
    let value = this.get("auctionEndedAt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set auctionEndedAt(value: BigInt | null) {
    if (value === null) {
      this.unset("auctionEndedAt");
    } else {
      this.set("auctionEndedAt", Value.fromBigInt(value as BigInt));
    }
  }

  get txnHash(): Bytes | null {
    let value = this.get("txnHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set txnHash(value: Bytes | null) {
    if (value === null) {
      this.unset("txnHash");
    } else {
      this.set("txnHash", Value.fromBytes(value as Bytes));
    }
  }
}

export class Bid extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bid entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Bid entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bid", id.toString(), this);
  }

  static load(id: string): Bid | null {
    return store.get("Bid", id) as Bid | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get auction(): string {
    let value = this.get("auction");
    return value.toString();
  }

  set auction(value: string) {
    this.set("auction", Value.fromString(value));
  }

  get bidder(): Bytes {
    let value = this.get("bidder");
    return value.toBytes();
  }

  set bidder(value: Bytes) {
    this.set("bidder", Value.fromBytes(value));
  }

  get bid(): BigInt {
    let value = this.get("bid");
    return value.toBigInt();
  }

  set bid(value: BigInt) {
    this.set("bid", Value.fromBigInt(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get txnHash(): Bytes {
    let value = this.get("txnHash");
    return value.toBytes();
  }

  set txnHash(value: Bytes) {
    this.set("txnHash", Value.fromBytes(value));
  }
}
