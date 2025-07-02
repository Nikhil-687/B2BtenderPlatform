import { Building2 } from "lucide-react"
import Link from "next/link"

export function Nav(){
    return(
        <>
          <header style={{
            borderBottom: '1px solid #e5e7eb',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(8px)',
            position: 'sticky',
            top: 0,
            zIndex: 50
          }}>
            <div className="container" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem'
            }}>
              <a href="/">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Building2 style={{ height: '32px', width: '32px', color: '#2563eb' }} />
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>TenderHub</span>
                </div>
              </a>
              <nav style={{ display: 'none', alignItems: 'center', gap: '1.5rem' }} className="md-flex">
                <Link href="#features" style={{ color: '#6b7280', textDecoration: 'none' }}>Features</Link>
                <Link href="#how-it-works" style={{ color: '#6b7280', textDecoration: 'none' }}>How it Works</Link>
                <Link href="#pricing" style={{ color: '#6b7280', textDecoration: 'none' }}>Pricing</Link>
              </nav>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Link href="/auth/signin" className="btn btn-ghost">Sign In</Link>
                <Link href="/auth/signup" className="btn btn-primary">Get Started</Link>
              </div>
            </div>
          </header>
        </>
    )
}
