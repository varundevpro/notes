import { COLORS } from "../utils/colors"
import { Note } from "./Note"

export const ListNotes = () => {
    const data = {
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quos ab ipsa? Dolorum atque voluptatem obcaecati ex explicabo eius voluptate debitis dicta aperiam?',
        date: (new Date()).toISOString()
    }

    return <div className='pt-12 px-16 pb-16'>
        <h2 className='text-5xl font-semibold mb-12'>Notes</h2>
        <div className='max-w-screen-2xl grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 gap-x-10 gap-y-10'>
            <Note {...data} color={COLORS[1]} />
            <Note {...data} color={COLORS[2]} isFav />
            <Note {...data} color={COLORS[3]} />
            <Note {...data} color={COLORS[4]} />
            <Note {...data} color={COLORS[5]} isFav />
            <Note {...data} color={COLORS[1]} />
            <Note {...data} color={COLORS[2]} />
        </div>
    </div>
}