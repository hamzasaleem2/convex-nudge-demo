import { useState } from 'react'
import './App.css'
import { ConvexNudge } from '@convex-nudge/react'

type Variant = 'light' | 'dark' | 'purple' | 'blue'
type Position = 'top' | 'bottom' | 'left' | 'right'
type Animation = 'fade' | 'slide' | 'none'
type TextSize = 'xs' | 'sm' | 'base'

function App() {
  const [settings, setSettings] = useState({
    variant: 'purple' as Variant,
    position: 'right' as Position,
    animation: 'slide' as Animation,
    fixed: true,
    dismissible: true,
    logoSize: 24,
    textSize: 'sm' as TextSize,
    referralCode: '',
  })

  const [isVisible, setIsVisible] = useState(true)

  const variants: Variant[] = ['light', 'dark', 'purple', 'blue']
  const positions: Position[] = ['top', 'bottom', 'left', 'right']
  const animations: Animation[] = ['fade', 'slide', 'none']
  const textSizes: TextSize[] = ['xs', 'sm', 'base']

  const updateSetting = (key: keyof typeof settings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      position: 'relative',
      overflow: settings.fixed ? 'hidden' : 'visible',
      padding: '4rem'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        minHeight: 'calc(100vh - 8rem)',
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}>
        <div style={{ 
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          width: '280px',
        }}>
          <div className="controls" style={{ 
            padding: '1.5rem',
            borderRadius: '12px',
            backgroundColor: '#f8fafc',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            <h2 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#1e293b'
            }}>
              Customize
            </h2>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#475569', fontSize: '0.875rem' }}>Theme</label>
              <select 
                value={settings.variant}
                onChange={(e) => updateSetting('variant', e.target.value as Variant)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}
              >
                {variants.map(v => <option key={v} value={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</option>)}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#475569', fontSize: '0.875rem' }}>Position</label>
              <select 
                value={settings.position}
                onChange={(e) => updateSetting('position', e.target.value as Position)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}
              >
                {positions.map(p => <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>)}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#475569', fontSize: '0.875rem' }}>Animation</label>
              <select 
                value={settings.animation}
                onChange={(e) => updateSetting('animation', e.target.value as Animation)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}
              >
                {animations.map(a => <option key={a} value={a}>{a.charAt(0).toUpperCase() + a.slice(1)}</option>)}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#475569', fontSize: '0.875rem' }}>Text Size</label>
              <select 
                value={settings.textSize}
                onChange={(e) => updateSetting('textSize', e.target.value as TextSize)}
                style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}
              >
                {textSizes.map(s => <option key={s} value={s}>{s.toUpperCase()}</option>)}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#475569', fontSize: '0.875rem' }}>Logo Size</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input 
                  type="range" 
                  min="16" 
                  max="32" 
                  value={settings.logoSize}
                  onChange={(e) => updateSetting('logoSize', Number(e.target.value))}
                  style={{ flex: 1 }}
                />
                <span style={{ fontSize: '0.875rem', color: '#64748b', minWidth: '3rem' }}>{settings.logoSize}px</span>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#475569', fontSize: '0.875rem' }}>Referral Code</label>
              <input 
                type="text" 
                value={settings.referralCode}
                onChange={(e) => updateSetting('referralCode', e.target.value)}
                placeholder="Enter code"
                style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.875rem' }}>
                <input 
                  type="checkbox" 
                  checked={settings.fixed}
                  onChange={(e) => updateSetting('fixed', e.target.checked)}
                />
                Fixed Position
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontSize: '0.875rem' }}>
                <input 
                  type="checkbox" 
                  checked={settings.dismissible}
                  onChange={(e) => updateSetting('dismissible', e.target.checked)}
                />
                Dismissible
              </label>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 8rem)',
          paddingLeft: '320px',
          paddingRight: '2rem',
        }}>
          <header style={{
            textAlign: 'center',
            marginBottom: '3rem',
            width: '100%',
            maxWidth: '500px'
          }}>
            <h1 style={{ 
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '0.75rem',
              background: 'linear-gradient(to right, #6366f1, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Convex Nudge Demo
            </h1>
            <p style={{
              fontSize: '1rem',
              color: '#64748b',
              margin: '0 auto 1.5rem',
            }}>
              A beautiful, customizable nudge component for React applications
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              backgroundColor: '#f8fafc',
              padding: '1.5rem',
              borderRadius: '12px',
              fontSize: '0.875rem',
              color: '#475569',
              textAlign: 'left',
            }}>
              <div>
                <div style={{ fontWeight: '600', marginBottom: '1rem', color: '#1e293b' }}>Available for Multiple Frameworks</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { name: 'React', package: '@convex-nudge/react' },
                    { name: 'Vue', package: '@convex-nudge/vue' },
                    { name: 'Svelte', package: '@convex-nudge/svelte' },
                    { name: 'Remix', package: '@convex-nudge/remix' }
                  ].map(framework => (
                    <a
                      key={framework.name}
                      href={`https://www.npmjs.com/package/${framework.package}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem',
                        backgroundColor: '#1e293b',
                        borderRadius: '6px',
                        color: '#e2e8f0',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'transform 0.1s ease-in-out',
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <svg viewBox="0 0 780 250" width="50" height="16" fill="#e2e8f0">
                        <path d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h100v150h100V50h50v150h50V50h50V0H480z M0,200h100V50h50v150h50V0H0V200z"/>
                      </svg>
                      <span style={{ flex: 1 }}>{framework.package}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>Quick Start</div>
                <pre style={{ 
                  backgroundColor: '#1e293b',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  color: '#e2e8f0',
                  fontSize: '0.75rem'
                }}>
{`import { ConvexNudge } from '@convex-nudge/react'

<ConvexNudge
  variant="purple"
  position="bottom"
  animation="slide"
/>`}
                </pre>
              </div>

              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
                <a 
                  href="https://github.com/hamzasaleem2/convex-nudge"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#3b82f6',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </header>

          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <div style={{
              textAlign: 'center',
              color: '#64748b',
            }}>
              {!isVisible ? (
                <button
                  onClick={() => setIsVisible(true)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '500'
                  }}
                >
                  Reset Nudge
                </button>
              ) : (
                <div style={{ fontSize: '0.575rem' }}>
                 
                </div>
              )}
            </div>

            {isVisible && (
              <ConvexNudge
                {...settings}
                onDismiss={() => settings.dismissible && setIsVisible(false)}
              />
            )}

            <div style={{ 
              width: '100%',
            }}>
              <h2 style={{ 
                color: '#1e293b',
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontWeight: '600'
              }}>
                Code
              </h2>
              <pre style={{ 
                backgroundColor: '#1e293b',
                padding: '1.5rem',
                borderRadius: '12px',
                color: '#e2e8f0',
                overflow: 'auto',
                fontSize: '0.875rem',
                lineHeight: '1.5'
              }}>
{`<ConvexNudge
  variant="${settings.variant}"
  position="${settings.position}"
  animation="${settings.animation}"
  textSize="${settings.textSize}"
  logoSize={${settings.logoSize}}${settings.referralCode ? `\n  referralCode="${settings.referralCode}"` : ''}
  ${settings.fixed ? '\n  fixed' : ''}${settings.dismissible ? '\n  dismissible' : ''}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
