"use client"

import type React from "react"
import { useState } from "react"
import { Building2, Eye, EyeOff } from 'lucide-react'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 2000)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #eef2ff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{ width: '100%', maxWidth: '28rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            textDecoration: 'none'
          }}>
            <Building2 style={{ height: '32px', width: '32px', color: '#2563eb' }} />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>TenderHub</span>
          </Link>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>
            Create Account
          </h1>
          <p style={{ color: '#6b7280' }}>Join thousands of companies on TenderHub</p>
        </div>

        <div className="card" style={{ border: 'none', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
          <div className="card-header" style={{ textAlign: 'center' }}>
            <h2 className="card-title">Sign Up</h2>
            <p className="card-description">Create your company account to get started</p>
          </div>
          <div className="card-content">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input id="firstName" placeholder="John" className="form-input" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input id="lastName" placeholder="Doe" className="form-input" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input id="email" type="email" placeholder="john@company.com" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="company" className="form-label">Company Name</label>
                <input id="company" placeholder="Your Company Ltd." className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="industry" className="form-label">Industry</label>
                <select className="form-select" required>
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="construction">Construction</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="form-input"
                    style={{ paddingRight: '2.5rem' }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '0.75rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#6b7280'
                    }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="form-input"
                    style={{ paddingRight: '2.5rem' }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{
                      position: 'absolute',
                      right: '0.75rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#6b7280'
                    }}
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input id="terms" type="checkbox" required />
                <label htmlFor="terms" style={{ fontSize: '0.875rem' }}>
                  I agree to the{" "}
                  <Link href="/terms" style={{ color: '#2563eb', textDecoration: 'none' }}>
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" style={{ color: '#2563eb', textDecoration: 'none' }}>
                    Privacy Policy
                  </Link>
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div className="spinner"></div>
                    Creating Account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <div style={{ marginTop: '1.5rem' }}>
              <div style={{
                height: '1px',
                backgroundColor: '#e5e7eb',
                margin: '1rem 0'
              }}></div>
              <div style={{ textAlign: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
                Already have an account?{" "}
                <Link href="/auth/signin" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
