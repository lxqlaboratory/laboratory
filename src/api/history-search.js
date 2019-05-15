import request from '@/utils/request'

export function getViolationQueryFormList() {
  return request({
    url: '/func/web/getVueAllViolationInfo',
    method: 'POST'
  })
}
export function getVehicleMonitoringViolationType() {
  return request({
    url: '/func/web/getVehicleMonitoringViolationType',
    method: 'POST'
  })
}