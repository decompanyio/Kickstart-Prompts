import Header from '@app/components/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Header />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
