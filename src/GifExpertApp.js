import React, {useState} from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories}/>
            <hr /> 

            <ol>
                {
                    categories.map(cat => 
                        <GifGrid
                            key={cat}
                            category={cat}
                        />
                    )
                }
            </ol>

        </>
    );
};

export default GifExpertApp;