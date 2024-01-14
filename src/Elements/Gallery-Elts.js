
import b1 from '../images/Gallery/birthdays/b1.jpg'
import b2 from '../images/Gallery/birthdays/b2.jpg'
import b3 from '../images/Gallery/birthdays/b3.jpg'
import b4 from '../images/Gallery/birthdays/b4.jpg'
import b5 from '../images/Gallery/birthdays/b5.jpg'

import c1 from '../images/Gallery/custom-orders/c1.jpg'
import c2 from '../images/Gallery/custom-orders/c2.jpg'
import c3 from '../images/Gallery/custom-orders/c3.jpg'
import c4 from '../images/Gallery/custom-orders/c4.jpg'

import d1 from '../images/Gallery/Daily-Pastry/d1.jpg'
import d2 from '../images/Gallery/Daily-Pastry/d2.jpg'
import d3 from '../images/Gallery/Daily-Pastry/d3.jpg'

import m1 from '../images/Gallery/mini/m1.jpg'
import m2 from '../images/Gallery/mini/m2.jpg'
import m3 from '../images/Gallery/mini/m3.jpg'
import m4 from '../images/Gallery/mini/m4.jpg'

import s1 from '../images/Gallery/Special-Cakes/s1.jpg'
import s2 from '../images/Gallery/Special-Cakes/s2.jpg'
import s3 from '../images/Gallery/Special-Cakes/s3.jpg'
import s4 from '../images/Gallery/Special-Cakes/s4.jpg'

import w1 from '../images/Gallery/Wedding-cakes/w1.jpg'
import w2 from '../images/Gallery/Wedding-cakes/w2.jpg'
import w3 from '../images/Gallery/Wedding-cakes/w3.jpg'

 const BirthdayCakes=[ b1 , b2 , b3 ,b4,b5 ]

 const CustomOrders=[c1 , c2 , c3 , c4 ]

 const Daily=[d1 , d2 , d3  ]

 const Mini=[m1 , m2 , m3 , m4 ]

 const Special=[s1 , s2 , s3 , s4]

 const Wedding=[w1 , w2, w3 ]

export const AllImgArrays=[{array:BirthdayCakes , desc:'Birthday Cakes'},{array:Special , desc:'Special Occasion Cakes'}, 
{array:Wedding , desc:'Weddind & Engagement Cakes'},{array:CustomOrders, desc:'Custom Orders'},{array:Mini , desc:'Mini Pastries'},{array:Daily, desc:'Daily Pastries'}  ]

const AllImg =[BirthdayCakes , Daily , Special, CustomOrders , Mini  , Wedding]
export const AllGalleryImgs= AllImg.flat()


