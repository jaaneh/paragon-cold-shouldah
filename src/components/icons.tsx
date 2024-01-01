import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  ExternalLink,
  File,
  FileText,
  Frown,
  Gamepad2,
  HelpCircle,
  Home,
  Image,
  Laptop,
  Youtube,
  LayoutDashboard,
  Loader2,
  Lock,
  LogOut,
  type LucideIcon,
  type LucideProps,
  Menu,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Tv2,
  Twitch,
  Twitter,
  User,
  X,
  Instagram,
  Facebook
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  calendar: Calendar,
  spinner: Loader2,
  close: X,
  home: Home,
  gamepad: Gamepad2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  logout: LogOut,
  laptop: Laptop,
  instagram: Instagram,
  facebook: Facebook,
  tv: Tv2,
  check: Check,
  youtube: Youtube,
  lock: Lock,
  frown: Frown,
  twitch: Twitch,
  copy: Copy,
  dashboard: LayoutDashboard,
  badgeCheck: BadgeCheck,
  externalLink: ExternalLink,
  menu: Menu,
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  discord: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      {...props}
    >
      <path
        d="M30.98 7a1 1 0 0 0-.89.586s-.335.743-.543 1.81C27.584 9.082 25.937 9 25 9c-.937 0-2.584.082-4.547.396a9.112 9.112 0 0 0-.543-1.81 1 1 0 0 0-.967-.584 1 1 0 0 0-.023.002s-6.366.417-10.54 3.71a1 1 0 0 0-.068.06c-.707.667-1.252 1.71-1.921 3.199-.67 1.489-1.375 3.382-2.024 5.525C3.07 23.783 2 29.054 2 34a1 1 0 0 0 .135.5c1.48 2.562 4.161 4.112 6.666 5.082 2.504.97 4.82 1.357 5.947 1.416a1 1 0 0 0 .865-.414l2.412-3.361c1.973.46 4.291.777 6.975.777 2.684 0 5.002-.317 6.975-.777l2.412 3.361a1 1 0 0 0 .865.414c1.127-.06 3.443-.446 5.947-1.416 2.505-.97 5.186-2.52 6.666-5.082A1 1 0 0 0 48 34c0-4.946-1.07-10.217-2.367-14.502-.649-2.143-1.354-4.036-2.024-5.525-.669-1.49-1.214-2.532-1.922-3.2a1 1 0 0 0-.068-.058C37.446 7.42 31.08 7.004 31.08 7.004a1 1 0 0 0-.1-.004zM18.264 9.145c.074.209.153.39.218.64-2.26.518-4.756 1.353-7.097 2.758a1 1 0 1 0 1.03 1.715C17.144 11.419 23.026 11 25 11c1.973 0 7.855.42 12.586 3.258a1 1 0 1 0 1.03-1.715c-2.342-1.405-4.838-2.24-7.098-2.758.065-.25.144-.431.218-.64 1.148.14 5.568.754 8.594 3.11.201.2.838 1.165 1.455 2.538.625 1.39 1.307 3.215 1.934 5.285 1.224 4.046 2.204 9.027 2.25 13.596-1.157 1.835-3.3 3.194-5.492 4.043a18.87 18.87 0 0 1-4.846 1.168l-1.598-2.227c.835-.267 1.59-.553 2.254-.842 2.525-1.099 3.871-2.263 3.871-2.263a1 1 0 1 0-1.316-1.506s-1.054.934-3.354 1.935c-.912.398-2.019.794-3.306 1.131a1 1 0 0 0-.043.012c-1.95.508-4.32.875-7.139.875-2.797 0-5.152-.362-7.094-.863a1 1 0 0 0-.056-.016l-.04-.01a1 1 0 0 0-.01-.002 22.8 22.8 0 0 1-3.288-1.127c-2.3-1-3.354-1.935-3.354-1.935a1 1 0 0 0-.637-.256 1 1 0 0 0-.68 1.762s1.347 1.164 3.872 2.263c.663.29 1.419.575 2.254.842l-1.598 2.227a18.87 18.87 0 0 1-4.846-1.168c-2.192-.85-4.335-2.208-5.492-4.043.046-4.569 1.026-9.55 2.25-13.596.627-2.07 1.31-3.896 1.934-5.285.617-1.373 1.254-2.339 1.455-2.537 3.026-2.357 7.446-2.971 8.594-3.111zM18.5 21c-1.452 0-2.665.674-3.414 1.637C14.337 23.599 14 24.806 14 26s.337 2.4 1.086 3.363C15.835 30.326 17.048 31 18.5 31c1.452 0 2.665-.674 3.414-1.637C22.663 28.401 23 27.194 23 26s-.337-2.4-1.086-3.363C21.165 21.674 19.952 21 18.5 21zm13 0c-2.532 0-4.5 2.315-4.5 5s1.968 5 4.5 5 4.5-2.315 4.5-5-1.968-5-4.5-5zm-13 2c.881 0 1.418.326 1.836.863.418.538.664 1.331.664 2.137s-.246 1.6-.664 2.137c-.418.537-.955.863-1.836.863-.881 0-1.418-.326-1.836-.863C16.246 27.599 16 26.806 16 26s.246-1.6.664-2.137c.418-.537.955-.863 1.836-.863zm13 0c1.268 0 2.5 1.285 2.5 3s-1.232 3-2.5 3-2.5-1.285-2.5-3 1.232-3 2.5-3z"
        fill="currentColor"
      />
    </svg>
  )
}