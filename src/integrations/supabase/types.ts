export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      auction_settings: {
        Row: {
          bid_increment: number
          created_at: string
          hidden_bidding: boolean
          id: string
          min_time_between_bids: number
          show_all_bids: boolean
        }
        Insert: {
          bid_increment: number
          created_at?: string
          hidden_bidding?: boolean
          id?: string
          min_time_between_bids?: number
          show_all_bids?: boolean
        }
        Update: {
          bid_increment?: number
          created_at?: string
          hidden_bidding?: boolean
          id?: string
          min_time_between_bids?: number
          show_all_bids?: boolean
        }
        Relationships: []
      }
      complaints: {
        Row: {
          brake_damage_type: string | null
          brake_position: string | null
          complaint_type: string
          created_at: string
          damage_location: string | null
          description: string | null
          id: string
          images: string[] | null
          interior_section: string | null
          registration_number: string
          status: string | null
        }
        Insert: {
          brake_damage_type?: string | null
          brake_position?: string | null
          complaint_type: string
          created_at?: string
          damage_location?: string | null
          description?: string | null
          id?: string
          images?: string[] | null
          interior_section?: string | null
          registration_number: string
          status?: string | null
        }
        Update: {
          brake_damage_type?: string | null
          brake_position?: string | null
          complaint_type?: string
          created_at?: string
          damage_location?: string | null
          description?: string | null
          id?: string
          images?: string[] | null
          interior_section?: string | null
          registration_number?: string
          status?: string | null
        }
        Relationships: []
      }
      notification_settings: {
        Row: {
          auction_notification_frequency: string
          created_at: string
          email_notification_frequency: string
          id: string
          user_id: string
        }
        Insert: {
          auction_notification_frequency?: string
          created_at?: string
          email_notification_frequency?: string
          id?: string
          user_id: string
        }
        Update: {
          auction_notification_frequency?: string
          created_at?: string
          email_notification_frequency?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      payment_settings: {
        Row: {
          account_holder: string | null
          account_number: string | null
          bank_name: string | null
          clearing_number: string | null
          created_at: string
          id: string
          payment_method: string
          user_id: string
        }
        Insert: {
          account_holder?: string | null
          account_number?: string | null
          bank_name?: string | null
          clearing_number?: string | null
          created_at?: string
          id?: string
          payment_method: string
          user_id: string
        }
        Update: {
          account_holder?: string | null
          account_number?: string | null
          bank_name?: string | null
          clearing_number?: string | null
          created_at?: string
          id?: string
          payment_method?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
