export interface PoolData {
  message: string;
  created: string;
  data: {
    id: number;
    pool_id: string;
    pool_id_bech32: string;
    db_ticker: string;
    db_name: string;
    db_url: string;
    stake_active: number;
    rewards_epoch: number;
    tax_ratio: number;
    tax_fix: number;
    roa: number;
    blocks_epoch: number;
    blocks_lifetime: number;
    blocks_est_lifetime: number;
    stamp_strike: number;
    pledge: number;
    hash_id: number;
    ticker_orig: string;
    delegators: number;
    pledged: number;
    roa_lifetime: number;
    luck_lifetime: number;
    latest_bv: number;
    group_basic: string;
    tax_ratio_old: number;
    tax_fix_old: number;
    tax_real: number;
    active_stake: number;
    active_blocks: number;
    direct: boolean;
    saturated: number;
    patreon: number;
    rank: number;
    handles: any;
    blocks_estimated: number;
    stake_x_deleg: number;
    db_description: string;
    owners: number;
    updated: string;
  };

}
