## **Төслийн ERD**

<a href="https://www.travelway.com/" target="_blank"><img src="https://res.cloudinary.com/dhirtao9q/image/upload/v1684374350/travelwayerd20230518at093722_ce18vt.png" width="100%" alt="travelway: Free and open fair-code licensed experience operating system (XOS)">
</a>

### Hello 👋

Аялагчидад туслах аяллын хөтөч

- <a href="https://github.com/Pinecone-aqua/travelway" target="_blank" > **travelway**</a> - travelway codebase

## Product Requirements Document (PRD)
# TravelWay
##### АЯЛАЛЫН ВЭБ АПП


##### March - June 2023
----
### TravelWay
- Багийхан:  Шаравнямбуу, Намнанцэрэн ,  Ялалт
- Анги: Aqua 2022
- Pinecone Academy


| no | Юу хийх вэ | Тайлбар |
|----|------------|---------|
| 1 | Determine the UX design | Хэрэглэгчийн UI, UX дизайн гаргах. Энэ нь дизайн болон хэрэглэгчийн “user interface” нь ойлгомжтой, хэрэглэгчдэд ээлтэй байхад тусална. |
| 2 | Build MVP Frontend and back-end | Үүнд <back-end>-ийн үндсэн логик орно. UX оролцогч талуудын харилцааг тодорхой болгох, мэдээллийн урсгалыг гаргах. Энэ  логикийг бий болгох нь, асуудлыг илрүүлэхэд тусална. |
| 3 | Develop wireframes and mockups | Figma ашиглан програмын зохион байгуулалт, хэрэглэгчийн интерфейс, функциональ байдлын дүрслэлийг бий болгох. |
| 4 | Build the back-end | Node.js, Express.js, React.js, MongoDB, NestJS ашиглан хэрэглэгчийн хүсэлтийг зохицуулах, өгөгдөл хадгалах, сэргээх, гадаад үйлчилгээтэй холбогдох боломжийг апп-д идэвхжүүлэхийн тулд сервер талын логик, өгөгдлийн сангийн схем, API-г хөгжүүлэх. |
| 5 | Build the front-end | Хэрэглэгчийн “user interface” хэсгийг ReactJS, Nextjs, Tailwind ашиглан хөгжүүлнэ. |
| 6 | Integrate third-party services | Төлбөрийн гарц, цахим шуудангийн үйлчилгээ үзүүлэгч, олон нийтийн мэдээллийн хэрэгслийн платформ зэрэг гуравдагч талын үйлчилгээг нэгтгэж, програмын үйл ажиллагаа, ашиглах чадварыг сайжруулна. |
| 7 | Test and debug | Аппликешн нь алдаагүй, шаардлагад нийцсэн, янз бүрийн хувилбарт сайн ажиллаж байгаа эсэхийг сайтар шалгаж үзэх. |
| 8 | Deploy and maintain | Програмыг сервер эсвэл хостинг платформ дээр байрлуулж, аюулгүй, тогтвортой, өргөтгөх боломжтой эсэхийг шалгах. Аппликешн нь хэрэглэгчдийн хэрэгцээг хангаж, өөрчлөгдөж буй технологи, чиг хандлагад дасан зохицож байгаа эсэхийг хянах, засвар үйлчилгээ хийх. |

### Зорилго
Адал явдалт аялал сонирхогчид өөрсдийн түүх, туршлага, мэдлэг, саналаа хуваалцах,  TravelWay аяллын блогоос өөрт хэрэгтэй мэдээллийг олж авахад чиглэнэ.
### Төслийн хамрах хүрээ
Монгол орны аяллын газар, орны мэдээлэл, аяллын маршрут, дотоодын аялагч нарын тэмдэглэл багтана.
Аяллын вэб хуудаснаас байгалийн үзэмжит аялалын сонирхол татахуйц газруудын мэдээллийг нүүр хуудаснаас үзнэ:

#### Хэрэглэгч нэвтрэлтийг удирдах: 
Хэрэглэгчдийг и-мэйл хаяг, нууц үгээр нэвтрэх, бүртгэлгүй хэрэглэгчийг бүртгэх.

##### Үйлчлэгч, аялалын газрын dashboard: 
## Technology
#### UI Design
- Figma
#### Frontend Business side
Бизнес логикоо энгийн байхаар шийдэж хэрэглэгч нэвтэрч, аяллын блог харах, блогтоо тэмдэглэл нэмэх, аялж болох газруудаас сонгож мэдээллийг харах боломжтойгоор хийсэн. Админ хэсэгт хэрэглэгч нэвтэрч товч мэдээлэл, тэмдэглэл, аяллын мэдээлэл болон хэрэглэгчийг нэмэх, хасах, засварлах боломжтойгоор хийсэн.
#### Frontend / Client side
Frontend талд бид сүүлийн үед тренд болоод байгаа технологи болох Reactjs, Nextjs технологиудыг ашиглан хийсэн.
#### Backend / Server side
Backend талд бид Javascript дээр суурилсан технологи болох Express, Node, Nestjs ашигласан. API service Nestjs дээр бичсэн.
#### Database / Data storage
Өгөгдлийн сан Nosql MongoDB, Mongoose технологиудыг ашиглан хийсэн. 

## Database Schema

#### travels:

```sh
id (string, primary key)
title (string)
description (string)
image (string)
userId (string)
day (array [{string}])
created_at (timestamp)
updated_at (timestamp)
```

#### users:

```sh
id (string, primary key)
username (string)
nickname (string)
email (string)
password (string)
phone (number)
biography (string)
image (string)
role (string)
created_at (timestamp)
updated_at (timestamp)
```

#### travelways:

```sh
id (string, primary key)
title (string)
sentence (string)
userId (string)
created_at (timestamp)
updated_at (timestamp)
```

#### stories:

```sh
id (string, primary key)
title (string)
description (string)
image (array[string])
myth (string)
toDo (array[string])
province  (string)
userId (string)
created_at (timestamp)
updated_at (timestamp)
```

#### ministories:

```sh
id (integer, primary key)
userId (string)
title (string)
image (string)
sentence (string)
created_at (timestamp)
updated_at (timestamp)
```

## API Endpoints

### Client side:
```sh
POST /auth/signup
POST /auth/login
POST /auth/loginHandler
```

```sh
GET /allUsers/pageNum
GET /allUsers/allId
POST /allUsers
GET /allUsers/profile
GET /allUsers/:id
PATCH /allUsers/:id
DELETE /allUsers/:id
GET /allUsers/page/:id
```

### Business Side:
```sh
POST /tags/add
GET /tags/get
GET /tags/:id 
PATCH /tags/:id 
DELETE /tags/:id
```

```sh
POST /travels/add
GET /travels/pageNum
GET /travels/allId
GET /travels/get
GET /travels/page:id
GET /travels/:id
PATCH /travels/:id
DELETE /travels/:id
GET /travels/user/:id
POST /travels/uploadimg
```

```sh
GET /stories/pageNum
GET /stories/page:id
GET /stories/user:id
GET /stories/allId
GET /stories/mark
GET /stories/:id
DELETE /stories/:id
POST /stories/create
PATCH /stories/:id
```

```sh
POST /ministory/add
GET /ministory/allId
GET /ministory/get
GET /ministory/:id
PATCH /ministory/:id
DELETE /ministory/:id
GET /ministory/user/:id
```

```sh
POST /travelways/add
GET /travelways/get
GET /travelways/:id
PATCH /travelways/:id
DELETE /travelways/:id
```

### The Component Hierarchy
##### Client side:
* index.tsx
    * Nav
    * Logo
* Menu bar
* 


### MVP - Minimium Valuable Product

0. [Backend] Хэрэглэгч, аялагч, ачллын мэдээлэл нэмэх, хасах, засварлах, устгах хэсгийн controller, routers, module хийв.
1. [Client] тал Хэрэглэгчийн товч түүхийг хардаг
2. [Client] тал Хэрэглэгч товч түүхээ оруулдаг
3. [Client] тал Аяллын хөтөлбөр хардаг
4. [Dashboard] дээр хэрэглэгч, аялал, хөтөлбөр, товч тэмдэглэлийг харах боломжтой болсон
5. [Dashboard] дээр аяллын мэдэлэл, хэрэглэгчийг устгадаг болсон
6. [Client] тал Аялахад тохиромжтой газруудын мэдээлэл харж болно
7. [Dashboard] дээр хайлт хийдэг болгох
8. [Client] Хэрэглэгчийн Context үүсгэх
9. [Client] Хэрэглэгч Google-ээр нэвтэрч ордог болгох
10. [Client] Хэрэглэгч эсвэл агент хөтөлбөрийн мэдээллээ оруулдаг болгох
11. [Client] Аяллын блог, товч түүхийг харуулах хэсгийг хийх

**travelway documentation**

Хэрэв танд асуулт байгаа бол бидэнтэй холбоо барина уу! Бид туслахдаа баяртай байна :)

<a href="https://travelway.com/contact" target="_blank"> **Feel free to contact us**</a>
