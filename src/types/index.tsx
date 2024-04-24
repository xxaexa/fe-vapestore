import { ReactNode } from "react"

export interface ProtectedRoute {

}

export interface LinkTextProps {
  link: string
  text: string
}

export interface IconTextProps {
  icon: ReactNode
  style?: string
}

export interface TextProps {
  text: string
  style?: string
}