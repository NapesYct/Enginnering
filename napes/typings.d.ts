export interface Data {
  _id: string,
  _ref: string,
  _type: string,
  name: string,
  description: string,
  office: string,
  mainImage: {
    asset: string
  },
  body: [object]

}

export interface News {
  _id: string,
  _ref: string,
  _type: string,
  _createdAt: string,
  title: string,
  author: {
    name: string,
    image: string,
  },
  description: string,
  publishedAt: string,
  mainImage: {
    asset: string
  }
}