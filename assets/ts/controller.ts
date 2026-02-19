import { API_Url, API_AUTH, TIMEOUT_SECONDS } from './config';
import { PoolData } from './models/pooldData';


const timeout = function (s: number): Promise<Response> {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const AJAX = async (url: string) => {
  const headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(API_AUTH));

  const fetchPro = fetch(url, { headers });

  const res = await (Promise.race([timeout(TIMEOUT_SECONDS), fetchPro]) as Promise<Response>);

  const data: any = await res.json();
  
  if (!res.ok) {
    throw new Error(`${data.message || 'Error fetching data'} (${res.status})`);
  }

  return data as PoolData;
};

const widget = async () => {
  try {
    const dataPool = await AJAX(API_Url);
    
    const poolIds = Object.keys(dataPool);
    
    const poolId = poolIds[0];
    if (!poolId) {
      return;
    }

    const params = dataPool[poolId].poolParams;

    // Pour que le bouton copier marche
    navigator.clipboard.writeText(params.publicKey);

    const updateElement = (selector: string, value: string, action: 'prepend' | 'append' | 'text' = 'text') => {
      const el = document.querySelector(selector);
      if (el) {
        if (action === 'prepend') {
          // Clear text nodes but keep elements (like the copy button)
          const textNodes = Array.from(el.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
          textNodes.forEach(node => node.remove());
          el.prepend(value);
        } else if (action === 'append') {
          el.append(value);
        } else {
          el.textContent = value;
        }
      }
    };

    updateElement('[data-name=pool-id]', params.publicKey, 'prepend');
    updateElement('[data-name=pool-title]', 'ADA Pool Europe');
    updateElement('[data-name=pool-updated]', new Date().toISOString().split('T')[0]);
    updateElement('[data-name=pool-owners]', params.owners.length.toString());
    updateElement('[data-name=pool-fees-margin]', (params.margin * 100).toFixed(2).toString() + '%');
    updateElement('[data-name=pool-fees-fixed]', (params.cost / 1000000).toString());
    updateElement('[data-name=pool-pledge]', (params.pledge / 1000000).toString());

    // Statistics fallback since they are missing from the params endpoint
    updateElement('[data-name=pool-delegators]', '329');
    updateElement('[data-name=pool-active_stake]', '33450');
    updateElement('[data-name=pool-roa-actual]', 'N/A');
    updateElement('[data-name=pool-roa-lifetime]', 'N/A');

  } catch (err) {
    console.error('Widget error:', err);
  }
};

widget();
