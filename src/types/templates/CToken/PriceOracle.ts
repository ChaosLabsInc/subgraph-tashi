// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OracleFailure extends ethereum.Event {
  get params(): OracleFailure__Params {
    return new OracleFailure__Params(this);
  }
}

export class OracleFailure__Params {
  _event: OracleFailure;

  constructor(event: OracleFailure) {
    this._event = event;
  }

  get msgSender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get asset(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get error(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get info(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get detail(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class NewPendingAnchor extends ethereum.Event {
  get params(): NewPendingAnchor__Params {
    return new NewPendingAnchor__Params(this);
  }
}

export class NewPendingAnchor__Params {
  _event: NewPendingAnchor;

  constructor(event: NewPendingAnchor) {
    this._event = event;
  }

  get anchorAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get asset(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get oldScaledPrice(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newScaledPrice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class PricePosted extends ethereum.Event {
  get params(): PricePosted__Params {
    return new PricePosted__Params(this);
  }
}

export class PricePosted__Params {
  _event: PricePosted;

  constructor(event: PricePosted) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get previousPriceMantissa(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get requestedPriceMantissa(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get newPriceMantissa(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CappedPricePosted extends ethereum.Event {
  get params(): CappedPricePosted__Params {
    return new CappedPricePosted__Params(this);
  }
}

export class CappedPricePosted__Params {
  _event: CappedPricePosted;

  constructor(event: CappedPricePosted) {
    this._event = event;
  }

  get asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get requestedPriceMantissa(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get anchorPriceMantissa(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get cappedPriceMantissa(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class SetPaused extends ethereum.Event {
  get params(): SetPaused__Params {
    return new SetPaused__Params(this);
  }
}

export class SetPaused__Params {
  _event: SetPaused;

  constructor(event: SetPaused) {
    this._event = event;
  }

  get newState(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class NewPendingAnchorAdmin extends ethereum.Event {
  get params(): NewPendingAnchorAdmin__Params {
    return new NewPendingAnchorAdmin__Params(this);
  }
}

export class NewPendingAnchorAdmin__Params {
  _event: NewPendingAnchorAdmin;

  constructor(event: NewPendingAnchorAdmin) {
    this._event = event;
  }

  get oldPendingAnchorAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newPendingAnchorAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewAnchorAdmin extends ethereum.Event {
  get params(): NewAnchorAdmin__Params {
    return new NewAnchorAdmin__Params(this);
  }
}

export class NewAnchorAdmin__Params {
  _event: NewAnchorAdmin;

  constructor(event: NewAnchorAdmin) {
    this._event = event;
  }

  get oldAnchorAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAnchorAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Failure extends ethereum.Event {
  get params(): Failure__Params {
    return new Failure__Params(this);
  }
}

export class Failure__Params {
  _event: Failure;

  constructor(event: Failure) {
    this._event = event;
  }

  get error(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get info(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get detail(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PriceOracle__anchorsResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getPeriod(): BigInt {
    return this.value0;
  }

  getPriceMantissa(): BigInt {
    return this.value1;
  }
}

export class PriceOracle extends ethereum.SmartContract {
  static bind(address: Address): PriceOracle {
    return new PriceOracle("PriceOracle", address);
  }

  anchorAdmin(): Address {
    let result = super.call("anchorAdmin", "anchorAdmin():(address)", []);

    return result[0].toAddress();
  }

  try_anchorAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall("anchorAdmin", "anchorAdmin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  maxSwingMantissa(): BigInt {
    let result = super.call(
      "maxSwingMantissa",
      "maxSwingMantissa():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxSwingMantissa(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxSwingMantissa",
      "maxSwingMantissa():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _assetPrices(param0: Address): BigInt {
    let result = super.call("_assetPrices", "_assetPrices(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try__assetPrices(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_assetPrices",
      "_assetPrices(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pendingAnchorAdmin(): Address {
    let result = super.call(
      "pendingAnchorAdmin",
      "pendingAnchorAdmin():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_pendingAnchorAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "pendingAnchorAdmin",
      "pendingAnchorAdmin():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  numBlocksPerPeriod(): BigInt {
    let result = super.call(
      "numBlocksPerPeriod",
      "numBlocksPerPeriod():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_numBlocksPerPeriod(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numBlocksPerPeriod",
      "numBlocksPerPeriod():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  readers(param0: Address): Address {
    let result = super.call("readers", "readers(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_readers(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("readers", "readers(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  anchors(param0: Address): PriceOracle__anchorsResult {
    let result = super.call("anchors", "anchors(address):(uint256,uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return new PriceOracle__anchorsResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_anchors(
    param0: Address
  ): ethereum.CallResult<PriceOracle__anchorsResult> {
    let result = super.tryCall(
      "anchors",
      "anchors(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PriceOracle__anchorsResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  poster(): Address {
    let result = super.call("poster", "poster():(address)", []);

    return result[0].toAddress();
  }

  try_poster(): ethereum.CallResult<Address> {
    let result = super.tryCall("poster", "poster():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingAnchors(param0: Address): BigInt {
    let result = super.call(
      "pendingAnchors",
      "pendingAnchors(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_pendingAnchors(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingAnchors",
      "pendingAnchors(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxSwing(): BigInt {
    let result = super.call("maxSwing", "maxSwing():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxSwing(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSwing", "maxSwing():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _setPendingAnchor(asset: Address, newScaledPrice: BigInt): BigInt {
    let result = super.call(
      "_setPendingAnchor",
      "_setPendingAnchor(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(newScaledPrice)
      ]
    );

    return result[0].toBigInt();
  }

  try__setPendingAnchor(
    asset: Address,
    newScaledPrice: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_setPendingAnchor",
      "_setPendingAnchor(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(newScaledPrice)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _setPaused(requestedState: boolean): BigInt {
    let result = super.call("_setPaused", "_setPaused(bool):(uint256)", [
      ethereum.Value.fromBoolean(requestedState)
    ]);

    return result[0].toBigInt();
  }

  try__setPaused(requestedState: boolean): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_setPaused", "_setPaused(bool):(uint256)", [
      ethereum.Value.fromBoolean(requestedState)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _setPendingAnchorAdmin(newPendingAnchorAdmin: Address): BigInt {
    let result = super.call(
      "_setPendingAnchorAdmin",
      "_setPendingAnchorAdmin(address):(uint256)",
      [ethereum.Value.fromAddress(newPendingAnchorAdmin)]
    );

    return result[0].toBigInt();
  }

  try__setPendingAnchorAdmin(
    newPendingAnchorAdmin: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_setPendingAnchorAdmin",
      "_setPendingAnchorAdmin(address):(uint256)",
      [ethereum.Value.fromAddress(newPendingAnchorAdmin)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _acceptAnchorAdmin(): BigInt {
    let result = super.call(
      "_acceptAnchorAdmin",
      "_acceptAnchorAdmin():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__acceptAnchorAdmin(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_acceptAnchorAdmin",
      "_acceptAnchorAdmin():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  assetPrices(asset: Address): BigInt {
    let result = super.call("assetPrices", "assetPrices(address):(uint256)", [
      ethereum.Value.fromAddress(asset)
    ]);

    return result[0].toBigInt();
  }

  try_assetPrices(asset: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "assetPrices",
      "assetPrices(address):(uint256)",
      [ethereum.Value.fromAddress(asset)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPrice(asset: Address): BigInt {
    let result = super.call("getPrice", "getPrice(address):(uint256)", [
      ethereum.Value.fromAddress(asset)
    ]);

    return result[0].toBigInt();
  }

  try_getPrice(asset: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getPrice", "getPrice(address):(uint256)", [
      ethereum.Value.fromAddress(asset)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  setPrice(asset: Address, requestedPriceMantissa: BigInt): BigInt {
    let result = super.call("setPrice", "setPrice(address,uint256):(uint256)", [
      ethereum.Value.fromAddress(asset),
      ethereum.Value.fromUnsignedBigInt(requestedPriceMantissa)
    ]);

    return result[0].toBigInt();
  }

  try_setPrice(
    asset: Address,
    requestedPriceMantissa: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "setPrice",
      "setPrice(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(requestedPriceMantissa)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  setPrices(
    assets: Array<Address>,
    requestedPriceMantissas: Array<BigInt>
  ): Array<BigInt> {
    let result = super.call(
      "setPrices",
      "setPrices(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(assets),
        ethereum.Value.fromUnsignedBigIntArray(requestedPriceMantissas)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_setPrices(
    assets: Array<Address>,
    requestedPriceMantissas: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "setPrices",
      "setPrices(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(assets),
        ethereum.Value.fromUnsignedBigIntArray(requestedPriceMantissas)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _poster(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addr0(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get reader0(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get addr1(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get reader1(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class _setPendingAnchorCall extends ethereum.Call {
  get inputs(): _setPendingAnchorCall__Inputs {
    return new _setPendingAnchorCall__Inputs(this);
  }

  get outputs(): _setPendingAnchorCall__Outputs {
    return new _setPendingAnchorCall__Outputs(this);
  }
}

export class _setPendingAnchorCall__Inputs {
  _call: _setPendingAnchorCall;

  constructor(call: _setPendingAnchorCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newScaledPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class _setPendingAnchorCall__Outputs {
  _call: _setPendingAnchorCall;

  constructor(call: _setPendingAnchorCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class _setPausedCall extends ethereum.Call {
  get inputs(): _setPausedCall__Inputs {
    return new _setPausedCall__Inputs(this);
  }

  get outputs(): _setPausedCall__Outputs {
    return new _setPausedCall__Outputs(this);
  }
}

export class _setPausedCall__Inputs {
  _call: _setPausedCall;

  constructor(call: _setPausedCall) {
    this._call = call;
  }

  get requestedState(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class _setPausedCall__Outputs {
  _call: _setPausedCall;

  constructor(call: _setPausedCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class _setPendingAnchorAdminCall extends ethereum.Call {
  get inputs(): _setPendingAnchorAdminCall__Inputs {
    return new _setPendingAnchorAdminCall__Inputs(this);
  }

  get outputs(): _setPendingAnchorAdminCall__Outputs {
    return new _setPendingAnchorAdminCall__Outputs(this);
  }
}

export class _setPendingAnchorAdminCall__Inputs {
  _call: _setPendingAnchorAdminCall;

  constructor(call: _setPendingAnchorAdminCall) {
    this._call = call;
  }

  get newPendingAnchorAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class _setPendingAnchorAdminCall__Outputs {
  _call: _setPendingAnchorAdminCall;

  constructor(call: _setPendingAnchorAdminCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class _acceptAnchorAdminCall extends ethereum.Call {
  get inputs(): _acceptAnchorAdminCall__Inputs {
    return new _acceptAnchorAdminCall__Inputs(this);
  }

  get outputs(): _acceptAnchorAdminCall__Outputs {
    return new _acceptAnchorAdminCall__Outputs(this);
  }
}

export class _acceptAnchorAdminCall__Inputs {
  _call: _acceptAnchorAdminCall;

  constructor(call: _acceptAnchorAdminCall) {
    this._call = call;
  }
}

export class _acceptAnchorAdminCall__Outputs {
  _call: _acceptAnchorAdminCall;

  constructor(call: _acceptAnchorAdminCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetPriceCall extends ethereum.Call {
  get inputs(): SetPriceCall__Inputs {
    return new SetPriceCall__Inputs(this);
  }

  get outputs(): SetPriceCall__Outputs {
    return new SetPriceCall__Outputs(this);
  }
}

export class SetPriceCall__Inputs {
  _call: SetPriceCall;

  constructor(call: SetPriceCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get requestedPriceMantissa(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetPriceCall__Outputs {
  _call: SetPriceCall;

  constructor(call: SetPriceCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetPricesCall extends ethereum.Call {
  get inputs(): SetPricesCall__Inputs {
    return new SetPricesCall__Inputs(this);
  }

  get outputs(): SetPricesCall__Outputs {
    return new SetPricesCall__Outputs(this);
  }
}

export class SetPricesCall__Inputs {
  _call: SetPricesCall;

  constructor(call: SetPricesCall) {
    this._call = call;
  }

  get assets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get requestedPriceMantissas(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class SetPricesCall__Outputs {
  _call: SetPricesCall;

  constructor(call: SetPricesCall) {
    this._call = call;
  }

  get value0(): Array<BigInt> {
    return this._call.outputValues[0].value.toBigIntArray();
  }
}
