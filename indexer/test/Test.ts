import assert from "assert";
import { 
  TestHelpers,
  InitializableImmutableAdminUpgradeabilityProxy_BackUnbacked
} from "generated";
const { MockDb, InitializableImmutableAdminUpgradeabilityProxy } = TestHelpers;

describe("InitializableImmutableAdminUpgradeabilityProxy contract BackUnbacked event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for InitializableImmutableAdminUpgradeabilityProxy contract BackUnbacked event
  const event = InitializableImmutableAdminUpgradeabilityProxy.BackUnbacked.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("InitializableImmutableAdminUpgradeabilityProxy_BackUnbacked is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await InitializableImmutableAdminUpgradeabilityProxy.BackUnbacked.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualInitializableImmutableAdminUpgradeabilityProxyBackUnbacked = mockDbUpdated.entities.InitializableImmutableAdminUpgradeabilityProxy_BackUnbacked.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedInitializableImmutableAdminUpgradeabilityProxyBackUnbacked: InitializableImmutableAdminUpgradeabilityProxy_BackUnbacked = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      reserve: event.params.reserve,
      backer: event.params.backer,
      amount: event.params.amount,
      fee: event.params.fee,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualInitializableImmutableAdminUpgradeabilityProxyBackUnbacked, expectedInitializableImmutableAdminUpgradeabilityProxyBackUnbacked, "Actual InitializableImmutableAdminUpgradeabilityProxyBackUnbacked should be the same as the expectedInitializableImmutableAdminUpgradeabilityProxyBackUnbacked");
  });
});
