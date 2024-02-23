import React from 'react'
const columns = [
  { name: 'ID', uid: 'id', sortable: true },
  { name: 'NAME', uid: 'name', sortable: true },
  { name: 'AGE', uid: 'age', sortable: true },
  { name: 'ROLE', uid: 'role', sortable: true },
  { name: 'TEAM', uid: 'team' },
  { name: 'EMAIL', uid: 'email' },
  { name: 'STATUS', uid: 'status', sortable: true },
  { name: 'ACTIONS', uid: 'actions' }
]

const statusOptions = [
  { name: 'Completed', uid: 'Completed' },
  { name: 'Prepaid', uid: 'Prepaid' },
  { name: 'In Transit', uid: 'In Transit' }
]

const users = [
  {
    id: 1,
    name: 'Tony Reichert',
    role: 'CEO',
    team: 'Management',
    status: 'Completed',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com'
  },
  {
    id: 2,
    name: 'Zoey Lang',
    role: 'Tech Lead',
    team: 'Development',
    status: 'Prepaid',
    age: '25',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com'
  },
  {
    id: 3,
    name: 'Jane Fisher',
    role: 'Sr. Dev',
    team: 'Development',
    status: 'Completed',
    age: '22',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com'
  },
  {
    id: 4,
    name: 'William Howard',
    role: 'C.M.',
    team: 'Marketing',
    status: 'In Transit',
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com'
  },
  {
    id: 5,
    name: 'Kristen Copper',
    role: 'S. Manager',
    team: 'Sales',
    status: 'Completed',
    age: '24',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com'
  },
  {
    id: 6,
    name: 'Brian Kim',
    role: 'P. Manager',
    team: 'Management',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'brian.kim@example.com',
    status: 'Completed'
  },
  {
    id: 7,
    name: 'Michael Hunt',
    role: 'Designer',
    team: 'Design',
    status: 'Prepaid',
    age: '27',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29027007d',
    email: 'michael.hunt@example.com'
  },
  {
    id: 8,
    name: 'Samantha Brooks',
    role: 'HR Manager',
    team: 'HR',
    status: 'Completed',
    age: '31',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e27027008d',
    email: 'samantha.brooks@example.com'
  },
  {
    id: 9,
    name: 'Frank Harrison',
    role: 'F. Manager',
    team: 'Finance',
    status: 'In Transit',
    age: '33',
    avatar: 'https://i.pravatar.cc/150?img=4',
    email: 'frank.harrison@example.com'
  },
  {
    id: 10,
    name: 'Emma Adams',
    role: 'Ops Manager',
    team: 'Operations',
    status: 'Completed',
    age: '35',
    avatar: 'https://i.pravatar.cc/150?img=5',
    email: 'emma.adams@example.com'
  },
  {
    id: 11,
    name: 'Brandon Stevens',
    role: 'Jr. Dev',
    team: 'Development',
    status: 'Completed',
    age: '22',
    avatar: 'https://i.pravatar.cc/150?img=8',
    email: 'brandon.stevens@example.com'
  },
  {
    id: 12,
    name: 'Megan Richards',
    role: 'P. Manager',
    team: 'Product',
    status: 'Prepaid',
    age: '28',
    avatar: 'https://i.pravatar.cc/150?img=10',
    email: 'megan.richards@example.com'
  },
  {
    id: 13,
    name: 'Oliver Scott',
    role: 'S. Manager',
    team: 'Security',
    status: 'Completed',
    age: '37',
    avatar: 'https://i.pravatar.cc/150?img=12',
    email: 'oliver.scott@example.com'
  },
  {
    id: 14,
    name: 'Grace Allen',
    role: 'M. Specialist',
    team: 'Marketing',
    status: 'Completed',
    age: '30',
    avatar: 'https://i.pravatar.cc/150?img=16',
    email: 'grace.allen@example.com'
  },
  {
    id: 15,
    name: 'Noah Carter',
    role: 'IT Specialist',
    team: 'I. Technology',
    status: 'Prepaid',
    age: '31',
    avatar: 'https://i.pravatar.cc/150?img=15',
    email: 'noah.carter@example.com'
  },
  {
    id: 16,
    name: 'Ava Perez',
    role: 'Manager',
    team: 'Sales',
    status: 'Completed',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?img=20',
    email: 'ava.perez@example.com'
  },
  {
    id: 17,
    name: 'Liam Johnson',
    role: 'Data Analyst',
    team: 'Analysis',
    status: 'Completed',
    age: '28',
    avatar: 'https://i.pravatar.cc/150?img=33',
    email: 'liam.johnson@example.com'
  },
  {
    id: 18,
    name: 'Sophia Taylor',
    role: 'QA Analyst',
    team: 'Testing',
    status: 'Completed',
    age: '27',
    avatar: 'https://i.pravatar.cc/150?img=29',
    email: 'sophia.taylor@example.com'
  },
  {
    id: 19,
    name: 'Lucas Harris',
    role: 'Administrator',
    team: 'Information Technology',
    status: 'Prepaid',
    age: '32',
    avatar: 'https://i.pravatar.cc/150?img=50',
    email: 'lucas.harris@example.com'
  },
  {
    id: 20,
    name: 'Mia Robinson',
    role: 'Coordinator',
    team: 'Operations',
    status: 'Completed',
    age: '26',
    avatar: 'https://i.pravatar.cc/150?img=45',
    email: 'mia.robinson@example.com'
  }
]

export { columns, users, statusOptions }

// const routes = [
//   { id: 1, name: "Route 1", startLocation: "Warehouse A", endLocation: "Client X" },
//   { id: 2, name: "Route 2", startLocation: "Warehouse B", endLocation: "Client Y" },
//   { id: 3, name: "Route 3", startLocation: "Warehouse A", endLocation: "Client Z" },
//   // Add more routes as needed
// ];

// const deliveries = [
//   { id: 1, routeId: 1, parcelId: "P001", status: "In transit", estimatedDeliveryTime: "2024-02-20 10:00 AM" },
//   { id: 2, routeId: 2, parcelId: "P002", status: "Delivered", estimatedDeliveryTime: "2024-02-19 02:30 PM" },
//   { id: 3, routeId: 3, parcelId: "P003", status: "Scheduled", estimatedDeliveryTime: "2024-02-21 09:15 AM" },
//   // Add more deliveries as needed
// ];

// const parcels = [
//   { id: "P001", weight: "5kg", dimensions: "20x20x20 cm", content: "Electronics" },
//   { id: "P002", weight: "2kg", dimensions: "15x10x8 cm", content: "Books" },
//   { id: "P003", weight: "10kg", dimensions: "30x30x30 cm", content: "Clothing" },
//   // Add more parcels as needed
// ];

// export { routes, deliveries, parcels };
