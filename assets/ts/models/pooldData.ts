export interface PoolData {
  cardano_cli_data: {
    [publicKey: string]: {
      poolParams: {
        cost: number;
        margin: number;
        pledge: number;
        owners: string[];
        publicKey: string;
      };
    };
  };
  adastat_data: {
    delegators: number;
    owner_stake: string;
  };
}
