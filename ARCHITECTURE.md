# System Architecture

## Frontend Architecture
```mermaid
graph TD
    subgraph Frontend
        UI[User Interface]
        subgraph Components
            Common[Common Components]
            Layout[Layout Components]
            Pages[Page Components]
        end
        subgraph State Management
            Auth[Authentication State]
            App[Application State]
        end
        subgraph Services
            API[API Service]
            Maps[Google Maps Service]
        end
    end

    UI --> Components
    Components --> Pages
    Pages --> State Management
    Pages --> Services
    Services --> API
    Services --> Maps
```

## System Integration
```mermaid
graph LR
    subgraph Frontend
        UI[React Frontend]
        Auth[Auth State]
        Maps[Google Maps]
    end

    subgraph Backend
        API[AppSync API]
        AuthService[Cognito Auth]
        DB[(DynamoDB)]
    end

    subgraph External Services
        GoogleMaps[Google Maps API]
    end

    UI --> Auth
    UI --> Maps
    Auth --> AuthService
    UI --> API
    API --> DB
    Maps --> GoogleMaps
```

## Data Flow
```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Auth
    participant API
    participant DB
    participant Maps

    User->>Frontend: Access Application
    Frontend->>Auth: Check Authentication
    Auth-->>Frontend: Auth Status
    
    User->>Frontend: View Map
    Frontend->>Maps: Load Map
    Maps-->>Frontend: Map Data
    
    User->>Frontend: Create Schedule
    Frontend->>API: Create Schedule Request
    API->>DB: Store Schedule
    DB-->>API: Confirmation
    API-->>Frontend: Success Response
    Frontend-->>User: Update UI
```

## Component Structure
```mermaid
graph TD
    subgraph Frontend Components
        Layout[Layout]
        Header[Header]
        Footer[Footer]
        
        subgraph Common Components
            Button[Button]
            Input[Input]
            Card[Card]
            Modal[Modal]
            Loading[Loading]
        end
        
        subgraph Pages
            Home[Home]
            Login[Login]
            Register[Register]
            Profile[Profile]
            Schedules[Schedules]
            Requests[Requests]
        end
    end

    Layout --> Header
    Layout --> Footer
    
    Layout --> Pages
    Pages --> Common Components
```

## Authentication Flow
```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Cognito
    participant AppSync
    
    User->>Frontend: Login Request
    Frontend->>Cognito: Authenticate
    Cognito-->>Frontend: Auth Token
    Frontend->>AppSync: API Request with Token
    AppSync-->>Frontend: Authorized Response
    Frontend-->>User: Update UI
``` 