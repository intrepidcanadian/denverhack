/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  InitializableImmutableAdminUpgradeabilityProxy,
  Proxy_BackUnbacked,
  Proxy_Borrow,
  Proxy_DeficitCovered,
  Proxy_DeficitCreated,
  Proxy_FlashLoan,
  Proxy_IsolationModeDebtUpdated,
  Proxy_LiquidationCall,
  Proxy_MintUnbacked,
  Proxy_MintedToTreasury,
  Proxy_Repay,
  Proxy_ReserveDataUpdated,
  Proxy_ReserveCollateralDisabled,
  Proxy_ReserveCollateralEnabled,
  Proxy_Supply,
  Proxy_Upgraded,
  Proxy_UserEModeSet,
  Proxy_Withdraw,
} from "generated";

InitializableImmutableAdminUpgradeabilityProxy.BackUnbacked.handler(async ({ event, context }) => {
  const entity: Proxy_BackUnbacked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    backer: event.params.backer,
    amount: event.params.amount,
    fee: event.params.fee,
  };

  context.Proxy_BackUnbacked.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.Borrow.handler(async ({ event, context }) => {
  const entity: Proxy_Borrow = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    onBehalfOf: event.params.onBehalfOf,
    amount: event.params.amount,
    interestRateMode: event.params.interestRateMode,
    borrowRate: event.params.borrowRate,
    referralCode: event.params.referralCode,
  };

  context.Proxy_Borrow.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.DeficitCovered.handler(async ({ event, context }) => {
  const entity: Proxy_DeficitCovered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    caller: event.params.caller,
    amountCovered: event.params.amountCovered,
  };

  context.Proxy_DeficitCovered.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.DeficitCreated.handler(async ({ event, context }) => {
  const entity: Proxy_DeficitCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    debtAsset: event.params.debtAsset,
    amountCreated: event.params.amountCreated,
  };

  context.Proxy_DeficitCreated.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.FlashLoan.handler(async ({ event, context }) => {
  const entity: Proxy_FlashLoan = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    target: event.params.target,
    initiator: event.params.initiator,
    asset: event.params.asset,
    amount: event.params.amount,
    interestRateMode: event.params.interestRateMode,
    premium: event.params.premium,
    referralCode: event.params.referralCode,
  };

  context.Proxy_FlashLoan.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.IsolationModeTotalDebtUpdated.handler(async ({ event, context }) => {
  const entity: Proxy_IsolationModeDebtUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    asset: event.params.asset,
    totalDebt: event.params.totalDebt,
  };

  context.Proxy_IsolationModeDebtUpdated.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.LiquidationCall.handler(async ({ event, context }) => {
  const entity: Proxy_LiquidationCall = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    collateralAsset: event.params.collateralAsset,
    debtAsset: event.params.debtAsset,
    user: event.params.user,
    debtToCover: event.params.debtToCover,
    liquidatedCollateralAmount: event.params.liquidatedCollateralAmount,
    liquidator: event.params.liquidator,
    receiveAToken: event.params.receiveAToken,
  };

  context.Proxy_LiquidationCall.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.MintUnbacked.handler(async ({ event, context }) => {
  const entity: Proxy_MintUnbacked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    onBehalfOf: event.params.onBehalfOf,
    amount: event.params.amount,
    referralCode: event.params.referralCode,
  };

  context.Proxy_MintUnbacked.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.MintedToTreasury.handler(async ({ event, context }) => {
  const entity: Proxy_MintedToTreasury = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    amountMinted: event.params.amountMinted,
  };

  context.Proxy_MintedToTreasury.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.Repay.handler(async ({ event, context }) => {
  const entity: Proxy_Repay = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    repayer: event.params.repayer,
    amount: event.params.amount,
    useATokens: event.params.useATokens,
  };

  context.Proxy_Repay.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.ReserveDataUpdated.handler(async ({ event, context }) => {
  const entity: Proxy_ReserveDataUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    liquidityRate: event.params.liquidityRate,
    stableBorrowRate: event.params.stableBorrowRate,
    variableBorrowRate: event.params.variableBorrowRate,
    liquidityIndex: event.params.liquidityIndex,
    variableBorrowIndex: event.params.variableBorrowIndex,
  };

  context.Proxy_ReserveDataUpdated.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.ReserveUsedAsCollateralDisabled.handler(async ({ event, context }) => {
  const entity: Proxy_ReserveCollateralDisabled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
  };

  context.Proxy_ReserveCollateralDisabled.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.ReserveUsedAsCollateralEnabled.handler(async ({ event, context }) => {
  const entity: Proxy_ReserveCollateralEnabled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
  };

  context.Proxy_ReserveCollateralEnabled.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.Supply.handler(async ({ event, context }) => {
  const entity: Proxy_Supply = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    onBehalfOf: event.params.onBehalfOf,
    amount: event.params.amount,
    referralCode: event.params.referralCode,
  };

  context.Proxy_Supply.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.Upgraded.handler(async ({ event, context }) => {
  const entity: Proxy_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.Proxy_Upgraded.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.UserEModeSet.handler(async ({ event, context }) => {
  const entity: Proxy_UserEModeSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    categoryId: event.params.categoryId,
  };

  context.Proxy_UserEModeSet.set(entity);
});

InitializableImmutableAdminUpgradeabilityProxy.Withdraw.handler(async ({ event, context }) => {
  const entity: Proxy_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    reserve: event.params.reserve,
    user: event.params.user,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.Proxy_Withdraw.set(entity);
});
