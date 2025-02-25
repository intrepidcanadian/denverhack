import assert from "assert";
import { 
  TestHelpers,
  Proxy_BackUnbacked
} from "generated";
const { MockDb, InitializableImmutableAdminUpgradeabilityProxy } = TestHelpers;

describe("Proxy contract BackUnbacked event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for contract BackUnbacked event
  const event = InitializableImmutableAdminUpgradeabilityProxy.BackUnbacked.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Proxy_BackUnbacked is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await InitializableImmutableAdminUpgradeabilityProxy.BackUnbacked.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualProxyBackUnbacked = mockDbUpdated.entities.Proxy_BackUnbacked.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedProxyBackUnbacked: Proxy_BackUnbacked = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      reserve: event.params.reserve,
      backer: event.params.backer,
      amount: event.params.amount,
      fee: event.params.fee,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualProxyBackUnbacked, expectedProxyBackUnbacked, "Actual ProxyBackUnbacked should be the same as the expectedProxyBackUnbacked");
  });
});
