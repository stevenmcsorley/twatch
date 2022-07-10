export interface FeaturedItemsProps {
  items: FeaturedItem[]
}

export interface FeaturedItem {
  id: number
  title: string
  description: string
  image: string
  path: string
}
