import moment from 'moment'

export default [
  {
    title: 'Arizona Sports teams ',
    date: moment().format('MMMM DD, YYYY'),
    categories:['Team News', 'Player News'],
    link: '#',
    image: 'azteams.png',
  },
  {
    title: 'Arizona Diamondbacks',
    date: moment().format('MMMM DD, YYYY'),
    categories:['Diamondbacks'],
    link: '#',
    image: 'diamondbacks.png'
  },
  {
    title: 'Phoenix Suns',
    date: moment().format('MMMM DD, YYYY'),
    categories:['Suns'],
    link: '#',
    image: 'suns.png'
  },
  {
    title: 'Off the field',
    date: moment().format('MMMM DD, YYYY'),
    categories:['Community'],
    link: '#',
    image: 'community.png'
  }
]