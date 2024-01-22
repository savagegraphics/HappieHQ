import { Card } from '@/app/ui/cards'
import { lusitana } from '@/app/ui/fonts'

export default function Page () {
  return (
    <main>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <Card title=' Active Shipment' value={24} type='collected' />
        <Card title='Cancelled' value={0} type='pending' />
        <Card title='Completed' value={47} type='invoices' />
        <Card title='Get Estmate' value={16} type='customers' />
      </div>
    </main>
  )
}
