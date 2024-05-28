import { builder, Builder, withChildren } from '@builder.io/react'
import dynamic from 'next/dynamic'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

Builder.registerComponent(
  dynamic(() => import('./components/Counter/Counter')),
  {
    name: 'Counter',
    inputs: [
      {
        name: 'initialCount',
        type: 'number',
      },
    ],
  }
)

Builder.registerComponent(
  withChildren(dynamic(() => import('./components/common/Sidebar'))),
  {
    name: 'SidebarTest',
    inputs: [
      {
        name: 'children',
        type: 'string',
        hideFromUI: true,
        meta: {
          ts: 'ReactNode',
        },
      },
      {
        name: 'open',
        type: 'boolean',
        required: true,
      },
    ],
  }
)
