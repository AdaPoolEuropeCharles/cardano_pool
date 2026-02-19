export interface PoolData {
  [publicKey: string]: {
    futurePoolParams: any;
    poolParams: {
      cost: number;
      margin: number;
      metadata: {
        hash: string;
        url: string;
      };
      owners: string[];
      pledge: number;
      publicKey: string;
      relays: Array<{
        'single host name'?: {
          dnsName: string;
          port: number;
        };
      }>;
      rewardAccount: {
        credential: {
          keyHash: string;
        };
        network: string;
      };
      vrf: string;
    };
    retiring: any;
  };
}
