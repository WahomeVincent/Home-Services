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
      about
    }
  }
  
  `
  const result = await request(MASTER_URL, query)
  return result
}


const createBooking = async(data) => {
  const mutationQuery = gql`
  mutation createBooking {
  createBooking(
    data: {
    bookingStatus: Booked, 
    businessList: {connect: {id: "`+data.businessId+`"}}, 
    date: "`+data.date+`", 
    time: "`+data.time+`", 
    userEmail: "`+data.userEmail+`", 
    userName: "`+data.userName+`"
  }
  ) {
    id
  }
  publishManyBookings {
    count
  }
  }
  
  `
  const result = await request(MASTER_URL, mutationQuery)
  return result
}

const getUserBookings = async (userEmail) => {
  const query = gql`
    query GetUserBookings {
    bookings(
      orderBy: updatedAt_DESC, 
      where: {userEmail: "`+userEmail+`"}) {
      businessList {
        id
        images {
          url
        }
        name
        address
        contactPerson
        email
        about
      }
      userEmail
      userName
      time
      bookingStatus
      date
      id
    }
  }

  `

  const result = await request(MASTER_URL, query)
  return result;
}

export default {
    getSlider,
    getCategory,
    getBusinessList,
    getBusinessListByCategory,
    createBooking,
    getUserBookings
}