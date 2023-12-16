export interface Dialog {
  hostName: string
  ip: string
  img: string
  time: number
  content: string
}
import sads from '../assets/images/user.jpg'
const str = sads
export const dialogs: Array<Dialog> = [
  {
    hostName: 'mac',
    ip: '192.168.0.12',
    img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
    time: 12232334,
    content: 'sa阿啊都asd阿萨asda啊阿萨德大萨达萨达萨达萨达萨达阿达萨达萨达萨达达萨达萨达是的dasd dasd阿迪啊大大的点点滴滴点点滴滴点点滴滴点点滴滴的等待的点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴的等待'
  },
  {
    hostName: 'haha',
    ip: '192.168.0.13',
    img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
    time: 2912232334,
    content: 's事实sd阿萨达撒啊dasd阿萨达达阿萨达撒啊三分大赛分沙发沙发萨法萨达萨阿萨达德上高速的损公肥私第三方公司上ad'
  },
  {
    hostName: 'kk',
    ip: '127.0.0.1',
    img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
    time: 1220932334,
    content: 'sad收拾收拾'
  },
  {
    hostName: 'rr',
    ip: '127.0.0.1',
    img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
    time: 1289232334,
    content: 'sadaaaaa'
  },
  {
    hostName: 'mac',
    ip: '192.168.0.11',
    img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
    time: 1223239034,
    content: 'sadllll'
  },
  {
    hostName: 'mac',
    ip: '192.168.0.2',
    img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
    time: 1223234534,
    content: 'saduussuu'
  },
  {
    hostName: 'mac',
    ip: '192.168.0.2',
    img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
    time: 1223234534,
    content: 'saduussuu'
  },
  {
    hostName: 'mac',
    ip: '192.168.0.2',
    img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
    time: 1223234534,
    content: 'saduussuu'
  },
  {
    hostName: 'mac',
    ip: '192.168.0.2',
    img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
    time: 1223234534,
    content: 'saduussuu'
  },
  {
    hostName: 'mac',
    ip: '192.168.0.2',
    img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
    time: 1223234534,
    content: 'saduussuu'
  },
  {
    hostName: 'mac',
    ip: '192.168.0.2',
    img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
    time: 1223234534,
    content: 'saduussuu'
  },
  {
    hostName: 'mac',
    ip: '192.168.0.2',
    img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
    time: 9223234534,
    content: '法克斯的分身乏术的是非得失'
  }
] 
export interface User {
  os: string
  ip: string
  hostName: string
  deviceId: string
  img: string
} 
export const users: Array<User> = [
  { os: 'mac', ip: '192.168.0.13', hostName: '萨达撒萨达', deviceId: '1', img: str },
  { os: 'windows', ip: '192.168.0.112', hostName: 'sutter', deviceId: '2', img: str },
  { os: 'linux', ip: '192.168.0.112', hostName: 'sutter', deviceId: '3', img: str },
  { os: 'unix', ip: '192.168.0.112', hostName: 'sutter', deviceId: '4', img: str },
  { os: 'oos', ip: '192.168.0.112', hostName: 'sutter', deviceId: '5', img: str },
  { os: 'mac', ip: '192.168.0.137', hostName: 's', deviceId: '6', img: str },
  { os: 'windows', ip: '192.168.0.16', hostName: 'sfutter', deviceId: '7', img: str },
  { os: 'linux', ip: '192.168.0.13', hostName: 'sutffater', deviceId: '8', img: str },
  { os: 'unix', ip: '192.168.0.1', hostName: 'sd', deviceId: '9', img: str },
  { os: 'oos', ip: '192.168.0.12', hostName: 'fgh', deviceId: '10', img: str },
  { os: 'oos', ip: '192.168.0.12', hostName: 'fgh', deviceId: '11', img: str },
  { os: 'unix', ip: '192.168.0.112', hostName: 'sutter', deviceId: '12', img: str },
  { os: 'mac', ip: '192.168.0.137', hostName: 's', deviceId: '13', img: str },
  { os: 'windows', ip: '192.168.0.16', hostName: 'sfutter', deviceId: '14', img: str },
  { os: 'linux', ip: '192.168.0.13333', hostName: 'sutffater', deviceId: '15', img: str }
]
