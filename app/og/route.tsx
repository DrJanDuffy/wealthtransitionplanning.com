import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Wealth Transition Planning | Real Estate Services for Financial Planners'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div tw="flex flex-col w-full h-full px-16 py-20 items-center justify-center">
          <div tw="flex flex-col items-center">
            <h1 tw="text-6xl font-bold text-gray-900 text-center mb-4">
              {title}
            </h1>
            <p tw="text-2xl text-gray-900 text-center mt-4">
              Supporting CERTIFIED Financial Planners in Las Vegas, Nevada
            </p>
            <div tw="flex items-center mt-8">
              <p tw="text-xl text-blue-600 font-semibold">
                Dr. Janet Duffy
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
