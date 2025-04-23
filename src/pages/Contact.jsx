export default function Contact() {
    return <main class="flex-grow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 class="text-4xl font-bold text-center mb-12">Contact Us</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div><h2 class="text-2xl font-semibold mb-6">Get in Touch</h2>
                    <form class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required="" value="" />
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required="" value="" />
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required="" style={{height: 133 + "px;"}}>
                            </textarea>
                        </div>
                        <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Send Message</button>
                    </form>
                </div>
                <div>
                    <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-6 h-6 text-blue-600 mr-4">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                            <div>
                                <h3 class="font-medium">Email</h3>
                                <p class="text-gray-600">support@shophub.com</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-6 h-6 text-blue-600 mr-4">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <div>
                                <h3 class="font-medium">Phone</h3>
                                <p class="text-gray-600">(555) 123-4567</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-6 h-6 text-blue-600 mr-4">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <div>
                                <h3 class="font-medium">Address</h3>
                                <p class="text-gray-600">123 Shop Street<br/>City, Country</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8">
                        <h2 class="text-2xl font-semibold mb-6">Business Hours</h2>
                        <div class="space-y-2">
                            <p>
                                <span class="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM
                            </p>
                            <p><span class="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</p>
                            <p>
                                <span class="font-medium">Sunday:</span> Closed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
}