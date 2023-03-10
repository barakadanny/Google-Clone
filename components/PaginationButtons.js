import { useRouter } from "next/router"
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"


function PaginationButtons() {
    const router = useRouter();

    const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex justify-center max-w-lg text-blue-700 mt-10">
      {startIndex >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`} >
            <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline mr-9">
                <ChevronLeftIcon className='h-5' />
                <span>Previous</span>
            </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronRightIcon className="h-5" />
            <span>Next</span>
        </div>
      </Link>
    </div>
  )
}

export default PaginationButtons
