# Version History

## [1.0.2] - 2025-01-05

### Added

- GitHub Actions runner implementation for CI/CD pipeline
- Docker production environment (Port 3001)
- Separate development and production Docker configurations
- ESLint and code formatting enforcement
- Automated test suite execution
- Enhanced development documentation

### Changed

- Docker Compose command structure
  - Development: `docker compose up development` (Port 3000)
  - Production: `docker compose up production` (Port 3001)
- Updated branch naming from 'develop' to 'dev'
- Improved documentation structure
- Enhanced WSL2 setup instructions

### Fixed

- Docker port configuration conflicts
- Environment settings consistency
- Container build optimization
- ESLint configuration issues

[1.0.2]: https://github.com/ByteFlowWebAgency/theExperienceBarberShop/releases/tag/v1.0.2
