/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  InitializableImmutableAdminUpgradeabilityProxy,
  InitializableImmutableAdminUpgradeabilityProxy_BackUnbacked,
  InitializableImmutableAdminUpgradeabilityProxy_Borrow,
  InitializableImmutableAdminUpgradeabilityProxy_DeficitCovered,
  InitializableImmutableAdminUpgradeabilityProxy_DeficitCreated,
  InitializableImmutableAdminUpgradeabilityProxy_FlashLoan,
  InitializableImmutableAdminUpgradeabilityProxy_IsolationModeTotalDebtUpdated,
  InitializableImmutableAdminUpgradeabilityProxy_LiquidationCall,
  InitializableImmutableAdminUpgradeabilityProxy_MintUnbacked,
  InitializableImmutableAdminUpgradeabilityProxy_MintedToTreasury,
  InitializableImmutableAdminUpgradeabilityProxy_Repay,
  InitializableImmutableAdminUpgradeabilityProxy_ReserveDataUpdated,
  InitializableImmutableAdminUpgradeabilityProxy_ReserveUsedAsCollateralDisabled,
  InitializableImmutableAdminUpgradeabilityProxy_ReserveUsedAsCollateralEnabled,
  InitializableImmutableAdminUpgradeabilityProxy_Supply,
  InitializableImmutableAdminUpgradeabilityProxy_Upgraded,
  InitializableImmutableAdminUpgradeabilityProxy_UserEModeSet,
  InitializableImmutableAdminUpgradeabilityProxy_Withdraw,
} from "generated";

InitializableImmutableAdminUpgradeabilityProxy.BackUnbacked.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_BackUnbacked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    backer: event.params.backer,
    amount: event.params.amount,
    fee: event.params.fee,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_BackUnbacked.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.Borrow.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_Borrow = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    onBehalfOf: event.params.onBehalfOf,
    amount: event.params.amount,
    interestRateMode: event.params.interestRateMode,
    borrowRate: event.params.borrowRate,
    referralCode: event.params.referralCode,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_Borrow.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.DeficitCovered.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_DeficitCovered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    caller: event.params.caller,
    amountCovered: event.params.amountCovered,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_DeficitCovered.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.DeficitCreated.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_DeficitCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    debtAsset: event.params.debtAsset,
    amountCreated: event.params.amountCreated,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_DeficitCreated.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.FlashLoan.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_FlashLoan = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    target: event.params.target,
    initiator: event.params.initiator,
    asset: event.params.asset,
    amount: event.params.amount,
    interestRateMode: event.params.interestRateMode,
    premium: event.params.premium,
    referralCode: event.params.referralCode,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_FlashLoan.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.IsolationModeTotalDebtUpdated.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_IsolationModeTotalDebtUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    asset: event.params.asset,
    totalDebt: event.params.totalDebt,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_IsolationModeTotalDebtUpdated.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.LiquidationCall.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_LiquidationCall = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    collateralAsset: event.params.collateralAsset,
    debtAsset: event.params.debtAsset,
    user: event.params.user,
    debtToCover: event.params.debtToCover,
    liquidatedCollateralAmount: event.params.liquidatedCollateralAmount,
    liquidator: event.params.liquidator,
    receiveAToken: event.params.receiveAToken,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_LiquidationCall.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.MintUnbacked.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_MintUnbacked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    onBehalfOf: event.params.onBehalfOf,
    amount: event.params.amount,
    referralCode: event.params.referralCode,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_MintUnbacked.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.MintedToTreasury.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_MintedToTreasury = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    amountMinted: event.params.amountMinted,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_MintedToTreasury.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.Repay.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_Repay = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    repayer: event.params.repayer,
    amount: event.params.amount,
    useATokens: event.params.useATokens,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_Repay.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.ReserveDataUpdated.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_ReserveDataUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    liquidityRate: event.params.liquidityRate,
    stableBorrowRate: event.params.stableBorrowRate,
    variableBorrowRate: event.params.variableBorrowRate,
    liquidityIndex: event.params.liquidityIndex,
    variableBorrowIndex: event.params.variableBorrowIndex,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_ReserveDataUpdated.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.ReserveUsedAsCollateralDisabled.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_ReserveUsedAsCollateralDisabled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_ReserveUsedAsCollateralDisabled.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.ReserveUsedAsCollateralEnabled.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_ReserveUsedAsCollateralEnabled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_ReserveUsedAsCollateralEnabled.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.Supply.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_Supply = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    onBehalfOf: event.params.onBehalfOf,
    amount: event.params.amount,
    referralCode: event.params.referralCode,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_Supply.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.Upgraded.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_Upgraded.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.UserEModeSet.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_UserEModeSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    categoryId: event.params.categoryId,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_UserEModeSet.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.Withdraw.handler(async ({ event, context }) => {
  const entity: InitializableImmutableAdminUpgradeabilityProxy_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.InitializableImmutableAdminUpgradeabilityProxy_Withdraw.set(entity);
});
