import { Company } from './companies.types'

export const mockCompanies: Company[] = [
    {
        guid: 'f0662e24-fbf1-4cbe-83ab-b0d2108d5693',
        logo: 'https://placekitten.com/50/50?image=16',
        companyName: 'Hatology',
        city: 'Tryon',
        specialties: [ 'Plumbing', 'Excavation' ]
      },
      {
        guid: 'b6117575-3b64-4128-b92f-4fa31fc2c03c',
        logo: 'https://placekitten.com/50/50?image=13',
        companyName: 'Miracula',
        city: 'Montura',
        specialties: [ 'Flooring', 'Carpenter' ]
      },
      {
        guid: 'a9297248-424e-4b37-ac35-ba0e9b09a89d',
        logo: 'https://placekitten.com/50/50?image=8',
        companyName: 'Quailcom',
        city: 'Centerville',
        specialties: [ 'Roofer', 'Carpenter' ]
      }
]

export const mockSpecialties: string[] = ['Plumbing', 'Excavation','Flooring', 'Carpenter', 'Roofer']
