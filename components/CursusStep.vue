<<template>
    <div class="flex flex-col md:flex-row items-center mb-8">
        <div class="md:w-1/3 text-center md:text-left">
            <div class="rounded-lg bg-green-500 w-32 h-12 flex items-center justify-center">
                <span class="text-white font-semibold text-lg">{{ props.year }}</span>
            </div>
            <div>
                <hr class='w-full -mt-5 ml-32  border-t border-dashed border-green-400 my-6'>
            </div>
        </div>
        <div class="md:w-2/3 bg-white px-6 py-4 shadow-lg rounded-lg border-b-2  border-green-500">
            <h3 class="text-xl font-bold mb-2">{{ props.title }}</h3>
            <p class="text-gray-600 font-semibold  mb-4">{{ props.school }}</p>
            <p class="text-justify">{{ props.description }}</p>
        </div>
    </div>
    </template>
    <script setup>
        const props = defineProps({
            year: String,
            title: String,
            school: String,
            description: String,
            inProgress : String
        })
    </script>
