import { gql, request } from 'graphql-request'

const MASTER_URL = 'https://api-eu-west-2.hygraph.com/v2/clwaiocd4009j07w5ow7ihmv1/master'

const getSlider = async() => {
    const query = gql`
    query MyQuery {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
    `
    const result = await request(MASTER_URL, query)
    return result
}

const getCategory = async() => {
    const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
    `
    const result = await request(MASTER_URL, query)
    return result
}

const getBusinessList = async() => {
  const query = gql`
  query GetBusinessLists {
    businessLists {
      id
      name
      email
      images {
        url
      }
      address
      contactPerson
      category {
        name
      }
    }
  }  
  `
  const result = await request(MASTER_URL, query)
  return result
}

const getBusinessListByCategory = async(category) => {
  const query = gql`
  query GetBusinessList {
    businessLists(where: {category: {name: "`+category+`"}}) {
      id
      name
      email
      images {
        url
      }
      address
      contactPerson
      category {
        name
      }
    }
  }
  `
  const result = await request(MASTER_URL, query)
  return result
}


export default {
    getSlider,
    getCategory,
    getBusinessList,
    getBusinessListByCategory
}