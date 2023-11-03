export const cardUrl = [
    'card1.png',
    'card2.png',
    'card3.png',
    'card4.png',
    'card5.png',
]

type productCard = {
    id: number
    title: string
    desc: string
    body: string
    imgUrl: string
}

type buySaitamaCard = {
    id: string
    body: string
}

export const productCards: productCard[] = [
    {
        id: 1,
        title: 'SAITAPRO',
        desc: 'Made For Convinience',
        body: 'Made for convenience with SaitaPro, your non-custodial wallet—your keys, your money.',
        imgUrl: '/icon1.png'
    },
    {
        id: 2,
        title: 'SAITA LOGISTICS',
        desc: 'Made For Logistics',
        body: 'Effortlessly ship anything, anywhere using crypto with SaitaLogistics—streamlining global logistics by air or sea.',
        imgUrl: '/icon3.png'
    },
    {
        id: 3,
        title: 'SAITAREALITY',
        desc: 'Made For Real Estate',
        body: 'Made for real estate with SaitaRealty DAO- transforming global real estate with innovative tokenization for a sustainable future.',
        imgUrl: '/icon4.png'
    },
    {
        id: 4,
        title: 'FANG',
        desc: 'Made For Creativity',
        body: 'Made for real estate with SaitaRealty DAO- transforming global real estate with innovative tokenization for a sustainable future.',
        imgUrl: '/icon5.png'
    },
    {
        id: 5,
        title: 'SAITAWSAP',
        desc: 'Made For Trading',
        body: 'Made for trading, secure transactions on SaitaSwap—your trusted gateway to DeFi.',
        imgUrl: '/icon6.png'
    },
    {
        id: 6,
        title: 'SAITACARD',
        desc: 'Made For Payment',
        body: 'Made for payment— spend up to 50k USD daily at 60 million+ places globally.',
        imgUrl: '/icon-w7.png'
    },
]

export const buySaitamaCards: buySaitamaCard[] = [
    {
        id: '01',
        body: 'Go to dex.saita.pro or access it through the SaitaPro app by tapping on ‘Swap’.'
    },
    {
        id: '02',
        body: 'Click on Connect and select MetaMask or Wallet connect depending on the wallet you use. On browsers we recommend using the MetaMask Google Chrome plugin.'
    },
    {
        id: '03',
        body: 'Make sure you hold a small amount of Ethereum (ETH) in your wallet to pay for the gas fees.'
    },
    {
        id: '04',
        body: 'Select ETH on the top menu and SAITAMA at the bottom. Enter the amount you want to swap to get the amount received'
    },
    {
        id: '05',
        body: 'Click on the cogwheel menu and set ‘slippage’ to 9% to make sure the transaction goes through.'
    },
    {
        id: '06',
        body: 'Click on ‘Swap’ and approve the transaction in your wallet app or plugin.'
    }
]