import store from '../../data/companies.json'
import { Company } from './companies.types'

const getCompanies = (): Company[] => store.companies

export { getCompanies }


// https://www.json-generator.com/
// [
//     '{{repeat(50, 7)}}',
//     {
//       guid: '{{guid()}}',
//       logo: 'https://placekitten.com/50/50',
//       companyName: '{{company()}}',
//       city: '{{city()}}',
//       specialties: [
//       		'{{repeat(2)}}',
//        		'{{random("Excavation", "Plumbing", "Electrical", "Carpenter", "Welding", "Flooring", "Roofer", "Painting")}}'
//         ]
//     }
//   ]