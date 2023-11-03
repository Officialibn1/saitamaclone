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