import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Email" invert={invert}>
          info@doragonmedia.com
          <br />
        </Office>
      </li>
      <li>
        <Office name="Address" invert={invert}>
          9737 NW 41 ST #395
          <br />
          DORAL, FL 33178
        </Office>
      </li>
    </ul>
  )
}


export function Offices(
  {invert=false, ...props}
  :React.ComponentPropswithoutRef<'ul'> & {invert?: booolean})