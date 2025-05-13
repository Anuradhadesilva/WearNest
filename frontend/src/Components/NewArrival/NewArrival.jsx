import { motion } from "motion/react"
import new_collections from '../Assets/new_collections'
import { Item } from '../Item/Item'

export const NewArrival = () => {
    return (
        <section className='py-12 '>
            <div className='max-w-7xl mx-auto text-center'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='mb-8'
                >
                    <h2 className="text-3xl font-bold mb-2">Popular Products</h2>

                    {/* Animated underline */}
                    <motion.div
                        className="h-1 bg-red-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '200px' }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    />
                </motion.div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                    {new_collections.map((item) => (
                        <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    ))}
                </div>
            </div>
        </section>
    )
}
