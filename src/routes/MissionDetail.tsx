import { useParams } from 'react-router-dom'

export function MissionDetail() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground">
          Mission ID: {id}
        </p>
        <p className="text-muted-foreground mt-4">
          Mission details coming soon...
        </p>
      </div>
    </div>
  )
}

