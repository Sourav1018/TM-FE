type BookingsHeaderProps = {
  title: string
  description: string
}

export function BookingsHeader({ title, description }: BookingsHeaderProps) {
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
