import './index.css';

const buyBtn = document.getElementById('buyBtn');
const buyBtn2 = document.getElementById('buyBtn2');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

buyBtn.addEventListener('click', function () {
    modal.classList.remove('opacity-0', 'pointer-events-none');
});

buyBtn2.addEventListener('click', function () {
    modal.classList.remove('opacity-0', 'pointer-events-none');
});

closeBtn.addEventListener('click', function () {
    modal.classList.add('opacity-0', 'pointer-events-none');
});

const check = 'M3 13.5l6.785 6.785A48.1 48.1 0 0121 4.143';
const mark = 'M4.5 19.5l15-15m-15 0l15 15';

let cardList = [
    {
        id: 'list1',
        includes: [
            {
                isCheck: true,
                productName: 'Charge Limiter',
            },
            {
                isCheck: true,
                productName: 'Discharge',
            },
            {
                isCheck: false,
                productName: 'Heat Protection',
            },
            {
                isCheck: false,
                productName: 'Sailing Mode',
            },
            {
                isCheck: false,
                productName: 'Top Up',
            },
            {
                isCheck: false,
                productName: 'Calibration Mode',
            },
            {
                isCheck: false,
                productName: 'Right Click',
            },
            {
                isCheck: false,
                productName: 'Live Status Icons',
            },
            {
                isCheck: false,
                productName: 'Premium Support',
            },
            {
                isCheck: false,
                productName: 'Premium Design',
            },
            {
                isCheck: false,
                productName: 'Full License',
            },
            {
                isCheck: false,
                productName: 'Developer Support',
            },
        ],
    },
    {
        id: 'list2',
        includes: [
            {
                isCheck: true,
                productName: 'Charge Limiter',
            },
            {
                isCheck: true,
                productName: 'Discharge',
            },
            {
                isCheck: true,
                productName: 'Heat Protection',
            },
            {
                isCheck: true,
                productName: 'Sailing Mode',
            },
            {
                isCheck: true,
                productName: 'Top Up',
            },
            {
                isCheck: true,
                productName: 'Calibration Mode',
            },
            {
                isCheck: true,
                productName: 'Right Click',
            },
            {
                isCheck: true,
                productName: 'Live Status Icons',
            },
            {
                isCheck: true,
                productName: 'Premium Support',
            },
            {
                isCheck: true,
                productName: 'Premium Design',
            },
            {
                isCheck: true,
                productName: '1 Year License',
            },
            {
                isCheck: true,
                productName: 'Long Term Developer Support',
            },
        ],
    },
    {
        id: 'list3',
        includes: [
            {
                isCheck: true,
                productName: 'Charge Limiter',
            },
            {
                isCheck: true,
                productName: 'Discharge',
            },
            {
                isCheck: true,
                productName: 'Heat Protection',
            },
            {
                isCheck: true,
                productName: 'Sailing Mode',
            },
            {
                isCheck: true,
                productName: 'Top Up',
            },
            {
                isCheck: true,
                productName: 'Calibration Mode',
            },
            {
                isCheck: true,
                productName: 'Right Click',
            },
            {
                isCheck: true,
                productName: 'Live Status Icons',
            },
            {
                isCheck: true,
                productName: 'Premium Support',
            },
            {
                isCheck: true,
                productName: 'Premium Design',
            },
            {
                isCheck: true,
                productName: 'Lifetime License',
            },
            {
                isCheck: true,
                productName: 'Developer Support',
            },
        ],
    },
];

function renderList(item) {
    const { id, includes } = item;

    const targetUl = document.getElementById(id);

    let htmlStr = '';

    for (let product of includes) {
        const { isCheck, productName } = product;

        let templateLi = `
          <li class="flex items-center mt-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 mr-4 ${
                    id === 'list2' ? 'text-white' : 'text-primary'
                }"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d = "${isCheck ? check : mark}"
                />
            </svg>
            ${productName}
        </li>
      `;

        htmlStr += templateLi;
    }

    targetUl.innerHTML = htmlStr;
}

for (const item of cardList) {
    renderList(item);
}
