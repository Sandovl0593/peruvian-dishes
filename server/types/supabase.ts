export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      alimento_especie: {
        Row: {
          alimento_nativo_id: string
          description: string
          id: string
          name: string
        }
        Insert: {
          alimento_nativo_id: string
          description: string
          id: string
          name: string
        }
        Update: {
          alimento_nativo_id?: string
          description?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "alimento_especie_alimento_nativo_id_fkey"
            columns: ["alimento_nativo_id"]
            isOneToOne: false
            referencedRelation: "alimento_nativo"
            referencedColumns: ["id"]
          },
        ]
      }
      alimento_nativo: {
        Row: {
          description: string
          id: string
          name: string
          tipo: string
        }
        Insert: {
          description: string
          id: string
          name: string
          tipo: string
        }
        Update: {
          description?: string
          id?: string
          name?: string
          tipo?: string
        }
        Relationships: []
      }
      gastronomia: {
        Row: {
          depart: string
          id: string
          name: string
          resume: string
          tipo: string
        }
        Insert: {
          depart: string
          id: string
          name: string
          resume: string
          tipo: string
        }
        Update: {
          depart?: string
          id?: string
          name?: string
          resume?: string
          tipo?: string
        }
        Relationships: []
      }
      ingrediente: {
        Row: {
          alimento_id: string
          cantidad: number
          gastro_id: string
          id: string
          paraneter: string
        }
        Insert: {
          alimento_id: string
          cantidad: number
          gastro_id: string
          id: string
          paraneter: string
        }
        Update: {
          alimento_id?: string
          cantidad?: number
          gastro_id?: string
          id?: string
          paraneter?: string
        }
        Relationships: [
          {
            foreignKeyName: "ingrediente_gastro_id_fkey"
            columns: ["gastro_id"]
            isOneToOne: false
            referencedRelation: "gastronomia"
            referencedColumns: ["id"]
          },
        ]
      }
      lugar_de_cultivo: {
        Row: {
          depart_perteneciente: string
          id: string
          name: string
          provincia: string
        }
        Insert: {
          depart_perteneciente: string
          id: string
          name: string
          provincia: string
        }
        Update: {
          depart_perteneciente?: string
          id?: string
          name?: string
          provincia?: string
        }
        Relationships: []
      }
      procedencia: {
        Row: {
          alimento_especie_id: string
          lugar_cultivo_id: string
          tipo_produccion: string
        }
        Insert: {
          alimento_especie_id: string
          lugar_cultivo_id: string
          tipo_produccion: string
        }
        Update: {
          alimento_especie_id?: string
          lugar_cultivo_id?: string
          tipo_produccion?: string
        }
        Relationships: [
          {
            foreignKeyName: "procedencia_alimento_especie_id_fkey"
            columns: ["alimento_especie_id"]
            isOneToOne: false
            referencedRelation: "alimento_especie"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "procedencia_lugar_cultivo_id_fkey"
            columns: ["lugar_cultivo_id"]
            isOneToOne: false
            referencedRelation: "lugar_de_cultivo"
            referencedColumns: ["id"]
          },
        ]
      }
      procedimiento: {
        Row: {
          gastro_id: string
          instruccion: string
          numero_instruccion: number
        }
        Insert: {
          gastro_id: string
          instruccion: string
          numero_instruccion: number
        }
        Update: {
          gastro_id?: string
          instruccion?: string
          numero_instruccion?: number
        }
        Relationships: [
          {
            foreignKeyName: "procedimiento_gastro_id_fkey"
            columns: ["gastro_id"]
            isOneToOne: false
            referencedRelation: "gastronomia"
            referencedColumns: ["id"]
          },
        ]
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
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
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
