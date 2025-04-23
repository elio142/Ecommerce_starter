import Category from "./Category";

export default function FeaturedCategories() {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Category title="Electronics" url="https://images.unsplash.com/photo-1498049794561-7780e7231661" />
            <Category title="Fashion" url="https://images.unsplash.com/photo-1445205170230-053b83016050" />
            <Category title="Home & Living" url="https://images.unsplash.com/photo-1484101403633-562f891dc89a" />
            {/* <div className="relative h-64 rounded-lg overflow-hidden cursor-pointer group">
                <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661" alt="Electronics" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">Electronics</h3>
                </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden cursor-pointer group">
                <img src="https://images.unsplash.com/photo-1445205170230-053b83016050" alt="Fashion" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">Fashion</h3>
                </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden cursor-pointer group">
                <img src="https://images.unsplash.com/photo-1484101403633-562f891dc89a" alt="Home &amp; Living" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">Home &amp; Living</h3>
                </div>
            </div> */}
        </div>
    </div>
}